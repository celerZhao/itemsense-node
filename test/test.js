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
  });

  var normalizedPath = require("path").join(__dirname, "unit");
  require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require("./unit/" + file).examples(expect);
  });
});

function addRequestHelper(host) {
  chai.Assertion.addMethod('haveSentRequest', function(request) {
    let obj, scope, stub;
    let { method, path, body, header, status, responseBody } = request;

    obj = this._obj;
    scope = nock(host);
    stub = scope[method](path, body);

    if (header) stub.matchHeader(header[0], header[1]);
    stub.reply(status || 200, responseBody);

    return this._obj.then(x => scope.done())
  });
}
