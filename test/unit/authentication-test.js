exports.examples = function(expect) {

	describe('.authentication', function() {
    describe('.getToken( username )', function() {
      it('PUTs to authentication/v1/token/:username and resolves to API response', function() {
        let username, token;
        username = 'nonAdminUser';
        token = "f635b10b-6afb-4387-a0fe-95497b3ed5bd";
        this.stub.put('/itemsense/authentication/v1/token/' + username)
            .matchHeader('Authorization', 'Basic c2VhbjpwYXNzd29yZA==')
            .reply(200, { token });
        expect(this.subject.authentication.getToken(username) ).to.become({ token });
      });
    });
  });

}
