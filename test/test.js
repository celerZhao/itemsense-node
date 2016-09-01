import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';
import ItemSense from '../dist/itemsense';

chai.use(chaiAsPromised);
const expect = chai.expect;

import constructor from './unit/constructor-test';
import health from './unit/health-test';
import users from './unit/users-test';
import authentication from './unit/authentication-test';

describe('ItemSense', function() {
  before(function() {
    let host = 'http://localhost:8080';
    let itemsenseUrl = host + "/itemsense/";
    let itemsenseConfig = {
      itemsenseUrl,
      username: "sean",
      password: "password"
    };

    this.describedClass = ItemSense;
    this.subject = new ItemSense(itemsenseConfig);
    this.stub = nock(host);
    this.itemsenseUrl = itemsenseUrl;
  });

  constructor.examples(expect);
  health.examples(expect);
  users.examples(expect);
  authentication.examples(expect);
});
