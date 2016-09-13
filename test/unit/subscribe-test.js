import amqp from 'amqp';

import EventEmitter from 'events';

exports.examples = function(expect, sinon) {
  describe('.messageQueue', function() {
    before(function() {
      this.queueObj = {serverUrl: 'amqp://localhost:5672/%2F', queue: '13fe4dd7-9073-4507-a0c3-32403753f7c0'}
      let queueObj = {subscribe: function() {}};
      let amqpStream = new EventEmitter();
      this.amqpStream = amqpStream;
      this.subscribeStub = sinon.stub(queueObj, 'subscribe', function(callback) {
        amqpStream.on('data', (data) => callback(data));
      });
      this.queueStub = sinon.stub().yields({subscribe: this.subscribeStub});
      this.connectionStub = new EventEmitter;
      this.connectionStub.queue = this.queueStub;
      this.createConnectionStub = sinon.stub(amqp, 'createConnection').returns(this.connectionStub);
      this.emitter = this.subject.messageQueue.subscribe(this.queueObj);
      this.connectionStub.emit('ready');
    });

    describe('.subscribe(queueObject)', function() {
      it('returns an EventEmitter that emits "data" when a new message is received.', function(done) {
        this.emitter.once('data', (data) => {
          expect(data.msg).to.equal('hello world!');
          done();
        });
        this.amqpStream.emit('data', {data: '{"msg": "hello world!"}'});
      });


      it('creates an AMQP connection using the provided serverUrl and ItemSense credentials.', function() {
        let createConnectionArgs = [{
          url: this.queueObj.serverUrl,
          login: this.itemsenseConfig.username,
          password: this.itemsenseConfig.password
        }, { reconnect: false }];

        sinon.assert.calledWith(this.createConnectionStub, ...createConnectionArgs);
      });

      it('waits for AMQP connection to be ready, then subscribes to the queue when the queue is ready', function(done) {
        this.emitter.once('data', () => {
          sinon.assert.calledWith(this.queueStub, this.queueObj.queue);
          sinon.assert.called(this.subscribeStub);
          done();
        });

        this.amqpStream.emit('data', {data: '{"msg": "hello world!"}'});
      });
    });

    describe('.configureAndSubscribe(queueObject)', function() {
      it('returns a promise that resolves to a queue representing the ', function(done) {
        let queueConfig = { epc: "E280116060000205077DA28F" };
        let messageQueueStub = sinon.stub(this.subject.messageQueue, 'configure')
                                    .returns(Promise.resolve(this.queueObj));
        let emitter = new EventEmitter;
        let subscribeStub = sinon.stub(this.subject.messageQueue, 'subscribe').returns(emitter)

        this.subject.messageQueue.configureAndSubscribe(queueConfig)
        .then( queue => {
          queue.on('data', () => {
            sinon.assert.calledWith(messageQueueStub, queueConfig);
            sinon.assert.calledWith(subscribeStub, this.queueObj);
            done();
          });
          emitter.emit('data', 'the pipes are open');
        });


      });
    });
  })

}
