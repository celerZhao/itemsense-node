exports.examples = function(expect) {
  describe('.facilities', function() {
    describe('.create(facilityName)', function() {
      it('POSTs to /configuration/v1/facilities/create with {name: facilityName} as the body', function() {
        const facilityName = "sampleFacility";
        return expect(this.subject.facilities.create(facilityName)).to.wrap.request({
          method: 'post',
          path: '/itemsense/configuration/v1/facilities/create',
          body: {name: facilityName}
        })
      });
    });

    describe('.createOrReplace(facilityName)', function() {
      it('PUTs to /configuration/v1/facilities/createOrReplace with {name: facilityName} as the body', function() {
        const facilityName = "sampleFacility";
        return expect(this.subject.facilities.createOrReplace(facilityName)).to.wrap.request({
          method: 'put',
          path: '/itemsense/configuration/v1/facilities/createOrReplace',
          body: {name: facilityName}
        });
      });

      it('is aliased by .update(facilityName)', function() {
        const facilityName = "sampleFacility";
        return expect(this.subject.facilities.update(facilityName)).to.wrap.request({
          method: 'put',
          path: '/itemsense/configuration/v1/facilities/createOrReplace',
          body: {name: facilityName}
        });
      })
    });

    describe('.get(facilityName)', function() {
      it('GETs to /configuration/v1/facilities/show/{facilityName}', function() {
        const facilityName = "sampleFacility";
        return expect(this.subject.facilities.get(facilityName)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/facilities/show/${facilityName}`
        });
      });
    });

    describe('.getAll(facilityName)', function() {
      it('GETs to /configuration/v1/facilities/show', function() {
        return expect(this.subject.facilities.getAll()).to.wrap.request({
          method: 'get',
          path: '/itemsense/configuration/v1/facilities/show'
        });
      });
    });
  });
}
