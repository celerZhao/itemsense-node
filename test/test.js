import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import ItemSense from '../dist/itemsense';
import * as helpers from './helpers';


describe('ItemSense', function() {
  before(function() {
    let host = 'http://localhost:8080';
    let itemsenseUrl = host + "/itemsense/";
    let itemsenseConfig = {
      itemsenseUrl,
      username: "sean",
      password: "password"
    };

    helpers.addRequestHelper(host);

    this.describedClass = ItemSense;
    this.subject = new ItemSense(itemsenseConfig);
    this.itemsenseUrl = itemsenseUrl;
    this.stub = helpers.stubRequest(host);
  });

  var normalizedPath = require("path").join(__dirname, "unit");
  require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require("./unit/" + file).examples(expect);
  });
});



