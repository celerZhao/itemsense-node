exports.examples = function (expect) {
	describe('.transitions', function () {
		describe('.get(queryParams)', function () {
      it('GETs to /v1/items/show/transitions with queryParams as the body', function () {
        const queryParams = { facility: 'sampleFacility' };
        return expect(this.subject.transitions.get(queryParams)).to.wrap.request({
          method: 'get',
          path: '/itemsense/data/v1/items/show/transitions',
          query: queryParams,
        });
      });
    });

    describe('.configureQueue(filterParams)', function () {
      it('PUTs to /data/v1/items/queues/threshold with messageQueueParams as the body', function () {
        const filterParams = { threshold: 'thresholdname', jobId: 'awesomeJobId' };
        return expect(this.subject.transitions.configureQueue(filterParams)).to.wrap.request({
          method: 'put',
          path: '/itemsense/data/v1/items/queues/threshold',
          body: filterParams,
        });
      });
    });

    describe('.configureQueue(filterParams, optionParams)', function () {
      it('PUTs to /data/v1/items/queues/threshold with messageQueueParams as the body', function () {
        const filterParams = { threshold: 'thresholdname', jobId: 'awesomeJobId' };
        const optionParams = { deliveryMethod: 'NON_PERSISTENT' };
        return expect(this.subject.transitions.configureQueue(filterParams, optionParams)).to.wrap.request({
          method: 'put',
          path: '/itemsense/data/v1/items/queues/threshold',
          query: optionParams,
          body: filterParams
        });
      });
    });
  });
}
