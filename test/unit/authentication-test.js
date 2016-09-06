exports.examples = function(expect) {

	describe('.authentication', function() {
    describe('.getToken( username )', function() {
      it('PUTs to authentication/v1/token/:username and resolves to API response', function() {
        let username, token;
        username = 'nonAdminUser';
        token = "f635b10b-6afb-4387-a0fe-95497b3ed5bd";

        return expect( this.subject.authentication.getToken(username) ).to.haveSent.and.resolveTo.request({
          method: 'put',
          path: '/itemsense/authentication/v1/token/' + username,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA=='],
          responseBody: { token }
        });
      });
    });
  });

}
