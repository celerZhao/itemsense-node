exports.examples = function(expect) {
	describe('.users', function() {
    describe('.create(userParams)', function() {
      it('POSTs to /configuration/v1/users/create with given user object and resolves to API response', function() {
        const user = { name: 'test1', roles: [ 'Admin' ] };
        const userParams = {name: 'test1', password: 'password', roles: ['admin'] };

        return expect(this.subject.users.create(userParams)).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: '/itemsense/configuration/v1/users/create',
          body: userParams,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA=='],
          responseBody: user
        });
      });
    });
  });
}
