exports.examples = function(expect) {

	describe('.authentication', function() {
    describe('.getToken(username)', function() {
      it('PUTs to authentication/v1/token/:username and resolves to API response', function() {
        const username = 'nonAdminUser';
        const token = "f635b10b-6afb-4387-a0fe-95497b3ed5bd";

        return expect(this.subject.authentication.getToken(username)).to.haveSent.and.resolveTo.request({
          method: 'put',
          path: '/itemsense/authentication/v1/token/' + username,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA=='],
          responseBody: { token }
        });
      });
    });

    describe('.getToken()', function() {
      it('GETs to /authentication/v1/token', function() {
        return expect(this.subject.authentication.getToken()).to.wrap.request({
          method: 'get',
          path: '/itemsense/authentication/v1/token'
        });
      });
    });

    describe('.getAllTokens(username)', function() {
      it('GETs to /authentication/v1/listTokens/{username}', function() {
        const username = "impinjUser"
        return expect(this.subject.authentication.getAllTokens(username)).to.wrap.request({
          method: 'get',
          path: `/itemsense/authentication/v1/listTokens/${username}`
        });
      });
    });

    describe('.revokeToken(token)', function() {
      it('PUTs to /authentication/v1/revokeToken with {token: token} in body', function() {
        const token = "token"
        return expect(this.subject.authentication.revokeToken(token)).to.wrap.request({
          method: 'put',
          path: `/itemsense/authentication/v1/revokeToken`,
          body: {token}
        });
      });
    });

    describe('.revokeTokens(username)', function() {
      it('PUTs to /authentication/v1/revokeTokens/{username}', function() {
        const username = "impinjUser"
        return expect(this.subject.authentication.revokeAllTokens(username)).to.wrap.request({
          method: 'put',
          path: `/itemsense/authentication/v1/revokeTokens/${ username }`
        });
      });
    });
  });

}
