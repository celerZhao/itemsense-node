import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';
import ItemSense from '../dist/itemsense';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('ItemSense', function() {
  before(function() {
    let host = 'http://localhost:8080';
    let itemsenseUrl = host + "/itemsense/";
    let itemsenseConfig = {
      itemsenseUrl,
      username: "sean",
      password: "password"
    };

    addRequestHelper(host);

    this.describedClass = ItemSense;
    this.subject = new ItemSense(itemsenseConfig);
    this.itemsenseUrl = itemsenseUrl;
    this.stub = stubRequest;
  });

  var normalizedPath = require("path").join(__dirname, "unit");
  require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require("./unit/" + file).examples(expect);
  });
});

function addRequestHelper(host) {
  chai.use(function (_chai, utils) {

    utils.addProperty(chai.Assertion.prototype, 'haveSent', function() {
      utils.flag(this, 'assertSend', true);
    });

    utils.addProperty(chai.Assertion.prototype, 'resolveTo', function() {
      utils.flag(this, 'assertResponse', true);
    });

    utils.addMethod(chai.Assertion.prototype, 'request', function(request) {
      let obj, scope;

      obj = this._obj;
      scope = stubRequest(request);

      let promises = []
      if (utils.flag(this, 'assertSend')) {
        promises.push( this._obj.then(x => scope.done()) );
      }
      if (utils.flag(this, 'resolveTo')) {
        promises.push( this._obj.then(x => new Assertion(x).to.deepEqual(responseBody)) );
      }

      return Promise.all(promises);
    });
  });
}

function stubRequest(request) {
  let host = 'http://localhost:8080';
  let scope, stub;
  let { method, path, body, header, status, responseBody } = request;
  scope = nock(host);
  stub = scope[method](path, body);
  if (header) stub.matchHeader(header[0], header[1]);
  stub.reply(status || 200, responseBody);
  return scope;
}
