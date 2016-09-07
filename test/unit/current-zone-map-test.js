exports.examples = function(expect) {
	describe('.currentZoneMaps', function() {
		describe('.get(facilityName)', function() {
      it('GETs to /control/v1/currentZoneMap/show/{facilityName}', function() {
        const facilityName = 'sampleFacility'
        return expect(this.subject.currentZoneMap.get(facilityName)).to.wrap.request({
          method: 'get',
          path: `/itemsense/control/v1/currentZoneMap/show/${facilityName}`
        });
      });
    });

    describe('.update(zoneMapName)', function() {
      it('POSTs to /control/v1/currentZoneMap/select/{zoneMapName}', function() {
        const zoneMapName = 'sampleZoneMap'
        return expect(this.subject.currentZoneMap.update(zoneMapName)).to.wrap.request({
          method: 'post',
          path: `/itemsense/control/v1/currentZoneMap/select/${zoneMapName}`
        });
      });
    });

    describe('.clear(facilityName)', function() {
      it('DELETEs to /control/v1/currentZoneMap/clear/{facilityName}', function() {
        const facilityName = 'sampleFacility'
        return expect(this.subject.currentZoneMap.clear(facilityName)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/control/v1/currentZoneMap/clear/${facilityName}`
        });
      });
    });
	});
}
