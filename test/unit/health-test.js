exports.examples = function(expect) {
  describe('.health', function() {
    describe('.events( queryObject )', function() {
      it('POSTs to /health/v1/events with queryObject and resolves to API response', function() {
        let queryObject, eventsObject;
        queryObject  = {fromTime: "2016-08-31T16:51:51.280Z", toTime: "2016-08-31T16:51:51.280Z", pageSize: 0};
        eventsObject = {events: [], nextPageMarker: null};
        this.stub.post('/itemsense/health/v1/events', queryObject)
            .reply(200, eventsObject);
        expect(this.subject.health.events(queryObject) ).to.become(eventsObject);
      });

      it('POSTs to /health/v1/events without queryObject and resolves to API response', function() {
        let queryObject, eventsObject;
        eventsObject = { events: [], nextPageMarker: null };
        this.stub.post('/itemsense/health/v1/events', {})
            .reply(200, eventsObject);
        expect(this.subject.health.events() ).to.become(eventsObject);
      });
    });

    describe('.configureQueue( queueObject )', function() {
      it('PUTs to /health/v1/events/queues and resolves to API response', function() {
        let queueObject, response;
        queueObject = { readerId: "", type: "", code: "" };
        response    = { serverUrl: "", queue: "" };
        this.stub.put('/itemsense/health/v1/events/queues', queueObject)
            .reply(200, response);
        expect(this.subject.health.configureQueue(queueObject) ).to.become(response);
      });
    });

    describe('.readers()', function() {
      it('GETs to /health/v1/readers', function() {
        let response;
        response = [{readerId: ""}];
        this.stub.get('/itemsense/health/v1/readers')
            .reply(200, response);
        expect(this.subject.health.readers() ).to.become(response);
      });
    });

    describe('.reader( readerId )', function() {
      it('GETs to /health/v1/readers/readerId', function() {
        let response, readerId;
        readerId = "127.0.0.1";
        response = { readerId };
        this.stub.get('/itemsense/health/v1/readers/' + readerId)
            .reply(200, response);
        expect(this.subject.health.reader( readerId ) ).to.become(response);
      });
    });
  });
}
