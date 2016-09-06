exports.examples = function(expect) {
  describe('.health', function() {
    describe('.events(queryObject)', function() {
      it('POSTs to /health/v1/events with queryObject and resolves to API response', function() {
        const queryObject  = { fromTime: "2016-08-31T16:51:51.280Z", toTime: "2016-08-31T16:51:51.280Z", pageSize: 0 };
        expect(this.subject.health.events(queryObject)).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: '/itemsense/health/v1/events'
        });
      });

      it('POSTs to /health/v1/events without queryObject and resolves to API response', function() {
        expect(this.subject.health.events()).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: '/itemsense/health/v1/events'
        });
      });
    });

    describe('.configureQueue(queueObject)', function() {
      it('PUTs to /health/v1/events/queues and resolves to API response', function() {
        const queueObject = { readerId: "", type: "", code: "" };
        expect(this.subject.health.configureQueue(queueObject)).to.haveSent.and.resolveTo.request({
          method: 'put',
          path: '/itemsense/health/v1/events/queues'
        });
      });
    });

    describe('.readers()', function() {
      it('GETs to /health/v1/readers', function() {
        const response = [{ readerId: "" }];
        expect(this.subject.health.readers()).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: '/itemsense/health/v1/readers'
        });
      });
    });

    describe('.reader(readerId)', function() {
      it('GETs to /health/v1/readers/readerId', function() {
        const readerId = "127.0.0.1";

        expect(this.subject.health.reader(readerId )).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: '/itemsense/health/v1/readers/' + readerId
        });
      });
    });
  });
}
