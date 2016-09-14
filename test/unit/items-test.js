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

    describe('.configureQueue(messageQueueParams)', function() {
      it('PUTs to /data/v1/items/queues with messageQueueParams as the body', function() {
        const messageQueueParams = { fromZone: 'exitZone', toZone: 'entryZone' };
        return expect(this.subject.items.configureQueue(messageQueueParams)).to.wrap.request({
          method: 'put',
          path: `/itemsense/data/v1/items/queues`,
          body: messageQueueParams
        });
      });
    });

    it('handles AMQP events', function() {
      let AmqpHandler = require('../../dist/services/amqp-handler.service.js');
      expect(this.subject.health instanceof AmqpHandler.constructor).to.be.true;
    });
  });
}
