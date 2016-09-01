exports.examples = function(expect) {
	describe('new', function() {
    it('accepts configuration object with itemsenseURL, username, and password and uses host and credentials in subsequent calls.', function() {
      let users = [{ name: "Admin", roles: [ "Admin" ] }];
      this.stub.get('/itemsense/configuration/v1/users/show')
          .matchHeader('Authorization', 'Basic c2VhbjpwYXNzd29yZA==')
          .reply(200, users);
      expect( this.subject.users.getAll() ).to.become(users);
    });

    it('accepts configuration object with itemsenseURL and auth token and uses host and token auth in subsequent calls.', function() {
      let users, authToken, itemsenseUrl, itemsense2;
      users = [{ name: "Admin", roles: [ "Admin" ] }];
      authToken = "6f81f0a4-a4c2-404f-8ea5-da93f90eff91";
      itemsenseUrl = this.itemsenseUrl;
      itemsense2 = new this.describedClass({ itemsenseUrl, authToken });
      this.stub.get('/itemsense/configuration/v1/users/show')
          .matchHeader('Authorization', `Token {"token": "${authToken}"}`)
          .reply(200, users);
      expect( itemsense2.users.getAll() ).to.become(users);
    });
  });
}
