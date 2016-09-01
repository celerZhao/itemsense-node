exports.examples = function(expect) {
	describe('.users', function() {
    describe('.create()', function() {
      it('POSTs to /configuration/v1/users/create with given user object and resolves to API response', function() {
        let user = { name: 'test1', roles: [ 'Admin' ] };
        let userOptions = {name: 'test1', password: 'password', roles: ['admin'] };
        this.stub.post('/itemsense/configuration/v1/users/create', userOptions)
            .matchHeader('Authorization', 'Basic c2VhbjpwYXNzd29yZA==')
            .reply(200, user);
        expect(this.subject.users.create(userOptions) ).to.become(user);
      });
    });
  });
}
