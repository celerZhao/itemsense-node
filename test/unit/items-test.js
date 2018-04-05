exports.examples = (expect) => {
  describe('.items', () => {
    describe('.get(queryParams)', () => {
      it('GETs to /v1/items/show with queryParams as the body', function () {
        const queryParams = { facility: 'sampleFacility' };
        return expect(this.subject.items.get(queryParams)).to.wrap.request({
          method: 'get',
          path: '/itemsense/data/v1/items/show',
          query: queryParams
        });
      });
    });

    describe('.getHistory(queryParams)', () => {
      it('GETs to /v1/items/show/history with queryParams as the body', function () {
        const queryParams = { facility: 'sampleFacility' };
        return expect(this.subject.items.getHistory(queryParams)).to.wrap.request({
          method: 'get',
          path: '/itemsense/data/v1/items/show/history',
          query: queryParams
        });
      });
    });

    describe('.configureQueue(filterParams)', () => {
      it('PUTs to /data/v1/items/queues with messageQueueParams as the body', function () {
        const filterParams = { fromZone: 'exitZone', toZone: 'entryZone' };
        return expect(this.subject.items.configureQueue(filterParams)).to.wrap.request({
          method: 'put',
          path: '/itemsense/data/v1/items/queues',
          body: filterParams
        });
      });
    });

    describe('.configureQueue(filterParams, options)', () => {
      it('PUTs to /data/v1/items/queues with messageQueueParams as the body', function () {
        const filterParams = { fromZone: 'exitZone', toZone: 'entryZone' };
        const optionParams = { deliveryMethod: 'NON_PERSISTENT' };
        return expect(this.subject.items.configureQueue(filterParams, optionParams)).to.wrap.request({
          method: 'put',
          path: '/itemsense/data/v1/items/queues',
          body: filterParams,
          query: optionParams
        });
      });
    });

    it('handles AMQP events', function () {
      const AmqpHandler = require('../../dist/services/amqp-handler.service.js');
      return expect(this.subject.health instanceof AmqpHandler.constructor).to.be.true;
    });
  });
};
