exports.examples = function(expect) {
	describe('.zoneMaps', function() {
		describe('.create(zoneMapParams)', function() {
      it('POSTs to /configuration/v1/zoneMaps/create with zoneMapParams as the body', function() {
        const zoneMapParams = { name: 'sampleZoneMap', zones: [] };
        return expect(this.subject.zoneMaps.create(zoneMapParams)).to.wrap.request({
          method: 'post',
          path: '/itemsense/configuration/v1/zoneMaps/create',
          body: zoneMapParams
        });
      });
    });

    describe('.update(zoneMapParams)', function() {
      it('PUTs to /configuration/v1/zoneMaps/createOrReplace with zoneMapParams as the body', function() {
        const zoneMapParams = { name: 'sampleZoneMap', zones: [] };
        return expect(this.subject.zoneMaps.update(zoneMapParams)).to.wrap.request({
          method: 'put',
          path: '/itemsense/configuration/v1/zoneMaps/createOrReplace',
          body: zoneMapParams
        });
      });
    });

    describe('.delete(zoneMapName)', function() {
      it('DELETEs to /configuration/v1/zoneMaps/destroy/{zoneMapName}', function() {
        const zoneMapName = "sampleZoneMap"
        return expect(this.subject.zoneMaps.delete(zoneMapName)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/zoneMaps/destroy/${zoneMapName}`
        });
      });
    });

    describe('.get(zoneMapName)', function() {
      it('GETs to /configuration/v1/zoneMaps/show/{zoneMapName}', function() {
        const zoneMapName = "sampleZoneMap"
        return expect(this.subject.zoneMaps.get(zoneMapName)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/zoneMaps/show/${zoneMapName}`
        });
      });
    });

     describe('.getAll()', function() {
      it('GETs to /configuration/v1/zoneMaps/show', function() {
        return expect(this.subject.zoneMaps.getAll()).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/zoneMaps/show`
        });
      });
    });
	});
}
