exports.examples = (expect) => {
  describe('.health', () => {
    describe('.events(queryObject)', () => {
      it('POSTs to /health/v1/events with queryObject and resolves to API response', function () {
        const queryObject = { fromTime: '2016-08-31T16:51:51.280Z', toTime: '2016-08-31T16:51:51.280Z', pageSize: 0 };
        expect(this.subject.health.events(queryObject)).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: '/itemsense/health/v1/events'
        });
      });

      it('POSTs to /health/v1/events without queryObject and resolves to API response', function () {
        expect(this.subject.health.events()).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: '/itemsense/health/v1/events'
        });
      });
    });

    describe('.configureQueue(queueObject)', () => {
      it('PUTs to /health/v1/events/queues and resolves to API response', function () {
        const filterParams = { readerId: '', type: '', code: '' };
        expect(this.subject.health.configureQueue(filterParams)).to.haveSent.and.resolveTo.request({
          method: 'put',
          path: '/itemsense/health/v1/events/queues'
        });
      });
    });

    describe('.configureQueue(filterParams, options)', () => {
      it('PUTs to /health/v1/events/queues and resolves to API response', function () {
        const filterParams = { readerId: '', type: '', code: '' };
        const optionsParams = { deliveryMethod: 'PERSISTENT' };
        expect(this.subject.health.configureQueue(filterParams, optionsParams)).to.haveSent.and.resolveTo.request({
          method: 'put',
          path: '/itemsense/health/v1/events/queues',
          query: optionsParams
        });
      });
    });

    describe('.readers()', () => {
      it('GETs to /health/v1/readers', function () {
        expect(this.subject.health.readers()).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: '/itemsense/health/v1/readers'
        });
      });
    });

    describe('.reader(readerId)', () => {
      it('GETs to /health/v1/readers/readerId', function () {
        const readerId = '127.0.0.1';
        expect(this.subject.health.reader(readerId)).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: `/itemsense/health/v1/readers/${readerId}`
        });
      });
    });

    it('handles AMQP events', function () {
      const AmqpHandler = require('../../dist/services/amqp-handler.service.js');
      expect(this.subject.health instanceof AmqpHandler.constructor).to.be.true;
    });
  });
};
