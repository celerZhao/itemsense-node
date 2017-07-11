import chai from 'chai';
import nock from 'nock';

export function stubRequest(host) {
  return (request) => {
    const { method, path, body, query, header, status, responseBody } = request;
    const scope = nock(host);
    const stub = scope[method](path, body);
    stub.query(query);
    // Quick fix to ensure proper authorization is used. Might wish to add
    // a .withAuth Chai property,
    // and dynamically generate auth depending on credentials
    if (header) {
      stub.matchHeader(...header);
    } else {
      stub.matchHeader('Authorization', 'Basic c2VhbjpwYXNzd29yZA==');
    }
    stub.reply(status || 200, responseBody);
    return scope;
  };
}

export function addRequestHelper(host) {
  chai.use((_chai, utils) => {
    utils.addProperty(chai.Assertion.prototype, 'haveSent', () => {
      utils.flag(this, 'assertSend', true);
    });

    utils.addProperty(chai.Assertion.prototype, 'resolveTo', () => {
      utils.flag(this, 'assertResponse', true);
    });

    utils.addProperty(chai.Assertion.prototype, 'wrap', () => {
      utils.flag(this, 'assertSend', true);
      utils.flag(this, 'assertResponse', true);
    });

    utils.addMethod(chai.Assertion.prototype, 'request', function (request) {
      const scope = stubRequest(host)(request);
      const promises = [];
      if (utils.flag(this, 'assertSend')) {
        promises.push(this._obj.then(() => scope.done()));
      }
      if (utils.flag(this, 'assertResponse')) {
        promises.push(this._obj.then(x => chai.expect(x).to.deep.equal(request.responseBody)));
      }
      return Promise.all(promises);
    });
  });
}
