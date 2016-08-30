import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';
import ItemSense from '../dist/itemsense';

chai.use(chaiAsPromised);
const expect = chai.expect;

let host, itemsense, itemsenseConfig;
host = 'http://localhost:8080';

describe('ItemSense', function() {
  before(function() {
    itemsenseConfig = {
      itemsenseUrl: host + "/itemsense/",
      username: "sean",
      password: "password"
    };
    itemsense = new ItemSense(itemsenseConfig);
  });

  describe('new', function() {
    it('accepts configuration object with itemsenseURL, username, and password and uses host and credentials in subsequent calls.', function() {
      let users = [{
            name: "Admin",
            roles: [ "Admin" ]
          }];

      let stub = nock(host)
        .get('/itemsense/configuration/v1/users/show')
        .matchHeader('Authorization', 'Basic c2VhbjpwYXNzd29yZA==')
        .reply(200, users);

      expect( itemsense.users.getAll() ).to.eventually.become(users);
    });
  });

  describe('.users', function() {
    describe('.create()', function() {
      let userOptions = {name: 'test1', password: 'password', roles: ['admin'] };

      it('POSTs to /configuration/v1/users/create with given user object and resolves to API response', function() {
        let user = { name: 'test1', roles: [ 'Admin' ] };

        let stub = nock('http://localhost:8080')
          .post('/itemsense/configuration/v1/users/create', userOptions)
          .matchHeader('Authorization', 'Basic c2VhbjpwYXNzd29yZA==')
          .reply(200, user);

        expect( itemsense.users.create(userOptions) ).to.eventually.become(user);
      });
    });
  });

  describe('.authentication', function() {
    describe('.getToken( username )', function() {
      it('PUTs to authentication/v1/token/:username and resolves to API response', function() {
        let username, token, stub;
        username = 'nonAdminUser';
        token = "f635b10b-6afb-4387-a0fe-95497b3ed5bd"
        stub = nock(host)
          .put('/itemsense/authentication/v1/token/' + username)
          .matchHeader('Authorization', 'Basic c2VhbjpwYXNzd29yZA==')
          .reply(200, { token });

        expect( itemsense.authentication.getToken(username) ).to.eventually.become({ token });
      });
    });
  });
});
