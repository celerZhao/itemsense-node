import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';

import ItemSense from '../dist/itemsense';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('ItemSense', () => {
  before(function () {
    const host = 'http://localhost:8080';
    const itemsenseUrl = `${host}/itemsense`;
    const itemsenseConfig = {
      itemsenseUrl,
      username: 'admin',
      password: 'admindefault'
    };

    helpers.addRequestHelper(host);

    this.describedClass = ItemSense;
    this.subject = new ItemSense(itemsenseConfig);
    this.itemsenseUrl = itemsenseUrl;
    this.itemsenseConfig = itemsenseConfig;
    this.stub = helpers.stubRequest(host);
  });

  const normalizedPath = require('path').join(__dirname, 'unit');
  require('fs').readdirSync(normalizedPath).forEach((file) => {
    require(`./unit/${file}`).examples(expect, sinon);
  });
});