exports.examples = function(expect) {
	describe('new', function() {
    it('accepts configuration object with itemsenseURL, username, and password and uses host and credentials in subsequent calls.', function() {
      const users = [{ name: "Admin", roles: [ "Admin" ] }];

      return expect(this.subject.users.getAll()).to.haveSent.and.resolveTo.request({
        method: 'get',
        path: '/itemsense/configuration/v1/users/show',
        header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA=='],
        status: 200,
        responseBody: users
      });
    });

    it('accepts configuration object with itemsenseURL and auth token and uses host and token auth in subsequent calls.', function() {
      const users = [{ name: "Admin", roles: [ "Admin" ] }];
      const authToken = "6f81f0a4-a4c2-404f-8ea5-da93f90eff91";
      const itemsenseUrl = this.itemsenseUrl;
      const itemsense2 = new this.describedClass({ itemsenseUrl, authToken });

      return expect(itemsense2.users.getAll()).to.haveSent.and.resolveTo.request({
        method: 'get',
        path: '/itemsense/configuration/v1/users/show',
        header: ['Authorization', `Token { "token": "${authToken }" }`],
        status: 200,
        responseBody: users
      });
    });
  });
}
