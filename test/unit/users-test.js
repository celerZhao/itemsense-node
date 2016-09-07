exports.examples = function(expect) {
	describe('.users', function() {
    describe('.create(userParams)', function() {
      it('POSTs to /configuration/v1/users/create with given user object and resolves to API response', function() {
        const user = { name: 'test1', roles: [ 'Admin' ] };
        const userParams = { name: 'test1', password: 'password', roles: ['admin'] };

        return expect(this.subject.users.create(userParams)).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: '/itemsense/configuration/v1/users/create',
          body: userParams,
          responseBody: user
        });
      });
    });

    describe('.update(userParams)', function() {
      it('PUTs to /configuration/v1/users/createOrReplace with userParams as body', function() {
        const userParams = { name: 'test1', password: 'password', roles: ['admin'] };

        return expect(this.subject.users.update(userParams)).to.wrap.request({
          method: 'put',
          path: '/itemsense/configuration/v1/users/createOrReplace',
          body: userParams
        });
      });
    });

    describe('.delete(username)', function() {
      it('DELETEs to /configuration/v1/users/destroy/{username}', function() {
        const username = "impinjUser"
        return expect(this.subject.users.delete(username)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/users/destroy/${username}`
        });
      });
    });

    describe('.get(username)', function() {
      it('GETs to /configuration/v1/users/show/{username}', function() {
        const username = "impinjUser"
        return expect(this.subject.users.get(username)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/users/show/${username}`
        });
      });
    });

    describe('.get()', function() {
      it('GETs to /configuration/v1/users/currentUser', function() {
        return expect(this.subject.users.get()).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/users/currentUser`
        });
      });
    });

    describe('.getAll()', function() {
      it('GETs to /configuration/v1/users/show', function() {
        return expect(this.subject.users.getAll()).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/users/show`
        });
      });
    });

    describe('.getRoles()', function() {
      it('GETs to /configuration/v1/users/roles/show', function() {
        return expect(this.subject.users.getRoles()).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/users/roles/show`
        });
      });
    });
  });
}
