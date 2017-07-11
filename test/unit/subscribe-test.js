import amqp from 'amqp';
import EventEmitter from 'events';

exports.examples = (expect, sinon) => {
  describe('AmqpHandler', () => {
    before(function () {
      // The following code serves two purposes:
      // 1. Stub out the node amqp library.
      // 2. Provide an `amqpStream` object that can simulate messages coming down the queue.
      //    This works because `amqp.subscribe` calls it's callback whenever a new message is
      //    available.
      //    We simply listen for new events on amqpStream and call the stub's callback.
      this.queueObj = {
        serverUrl: 'amqp://localhost:5672/%2F',
        queue: '13fe4dd7-9073-4507-a0c3-32403753f7c0'
      };
      const queueObj = { subscribe: () => {} };
      const amqpStream = new EventEmitter();
      this.amqpStream = amqpStream;
      this.subscribeStub = sinon.stub(queueObj, 'subscribe', (callback) => {
        amqpStream.on('data', data => callback(data));
      });
      this.queueStub = sinon.stub().yields({ subscribe: this.subscribeStub });
      this.connectionStub = new EventEmitter();
      this.connectionStub.queue = this.queueStub;
      this.createConnectionStub = sinon.stub(amqp, 'createConnection').returns(this.connectionStub);
      this.emitter = this.subject.items.subscribe(this.queueObj);
    });

    // These tests should ultimately be abstracted away from a particular
    // implementation of the AmqpHandler (rather than `items`)
    // but it gets the job done.
    describe('.subscribe(queueObject)', () => {
      it('raises an error should the AMQP connection fail for any reason', function () {
        const error = 'ERRCONREFUSED';
        return expect(() => {
          this.connectionStub.emit('error', error);
        }).to.throw(error);
      });

      describe('upon successful connection', () => {
        before(function () {
          this.connectionStub.emit('ready');
        });

        it('returns an EventEmitter that emits "data" when a new message is received.', function (done) {
          this.emitter.once('data', (data) => {
            expect(data.msg).to.equal('hello world!');
            done();
          });
          this.amqpStream.emit('data', { data: '{"msg": "hello world!"}' });
        });


        it('creates an AMQP connection using the provided serverUrl and ItemSense credentials.', function () {
          const createConnectionArgs = [
            {
              url: this.queueObj.serverUrl,
              login: this.itemsenseConfig.username,
              password: this.itemsenseConfig.password
            },
            { reconnect: false }
          ];

          sinon.assert.calledWith(this.createConnectionStub, ...createConnectionArgs);
        });

        it('waits for AMQP connection to be ready, then subscribes to the queue when the queue is ready', function (done) {
          this.emitter.once('data', () => {
            sinon.assert.calledWith(this.queueStub, this.queueObj.queue);
            sinon.assert.called(this.subscribeStub);
            done();
          });
          this.amqpStream.emit('data', { data: '{"msg": "hello world!"}' });
        });
      });
    });

    describe('.configureAndSubscribe(queueObject)', () => {
      it('returns a promise that resolves to a queue representing the ', function (done) {
        const queueConfig = { epc: 'E280116060000205077DA28F' };
        const messageQueueStub = sinon.stub(this.subject.items, 'configureQueue')
                                    .returns(Promise.resolve(this.queueObj));
        const emitter = new EventEmitter();
        const subscribeStub = sinon.stub(this.subject.items, 'subscribe').returns(emitter);

        this.subject.items.configureAndSubscribe(queueConfig)
        .then((queue) => {
          queue.on('data', () => {
            sinon.assert.calledWith(messageQueueStub, queueConfig);
            sinon.assert.calledWith(subscribeStub, this.queueObj);
            done();
          });
          emitter.emit('data', 'the pipes are open');
        });
      });
    });
  });
};
