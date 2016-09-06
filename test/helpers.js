import chai from 'chai';
import nock from 'nock';

export function addRequestHelper(host) {
  chai.use(function (_chai, utils) {

    utils.addProperty(chai.Assertion.prototype, 'haveSent', function() {
      utils.flag(this, 'assertSend', true);
    });

    utils.addProperty(chai.Assertion.prototype, 'resolveTo', function() {
      utils.flag(this, 'assertResponse', true);
    });

    utils.addProperty(chai.Assertion.prototype, 'wrap', function() {
      utils.flag(this, 'assertSend', true);
      utils.flag(this, 'assertResponse', true);
    });

    utils.addMethod(chai.Assertion.prototype, 'request', function(request) {
      let obj, scope;

      obj = this._obj;
      scope = stubRequest(host)(request);

      let promises = []
      if (utils.flag(this, 'assertSend')) {
        promises.push(this._obj.then(x => scope.done()));
      }
      if (utils.flag(this, 'assertResponse')) {
        promises.push(this._obj.then(x => chai.expect(x).to.deep.equal(request.responseBody)));
      }

      return Promise.all(promises);
    });
  });
}

export function stubRequest(host) {
	return function (request) {
	  let scope, stub;
	  let { method, path, body, header, status, responseBody } = request;
	  scope = nock(host);
	  stub = scope[method](path, body);
    // quick fix to ensure proper authorization is used. Might wish to add a .withAuth Chai property,
    // and dynamically generate auth depending on credentials
    if (header) {
      stub.matchHeader(...header);
    } else {
  	  stub.matchHeader('Authorization', 'Basic c2VhbjpwYXNzd29yZA==');
    }
	  stub.reply(status || 200, responseBody);
	  return scope;
	}
}


