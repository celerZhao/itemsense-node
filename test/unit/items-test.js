exports.examples = function(expect) {
	describe('.items', function() {
		describe('.get(queryParams)', function() {
      it('GETs to /v1/items/show with queryParams as the body', function() {
        const queryParams = { facility: 'sampleFacility' };
        return expect(this.subject.items.get(queryParams)).to.wrap.request({
          method: 'get',
          path: `/itemsense/v1/items/show`,
          query: queryParams
        });
      });
    });

    describe('.getHistory(queryParams)', function() {
      it('GETs to /v1/items/show/history with queryParams as the body', function() {
        const queryParams = { facility: 'sampleFacility' };
        return expect(this.subject.items.getHistory(queryParams)).to.wrap.request({
          method: 'get',
          path: `/itemsense/v1/items/show/history`,
          query: queryParams
        });
      });
    });
	});
}
