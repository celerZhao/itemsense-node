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

    describe('.configureQueue(messageQueueParams)', function () {
      it('PUTs to /data/v1/items/queues/threshold with messageQueueParams as the body', function () {
        const messageQueueParams = { threshold: 'thresholdname', jobId: 'awesomeJobId' };
        return expect(this.subject.transitions.configureQueue(messageQueueParams)).to.wrap.request({
          method: 'put',
          path: '/itemsense/data/v1/items/queues/threshold',
          body: messageQueueParams,
        });
      });
    });
  });
}
