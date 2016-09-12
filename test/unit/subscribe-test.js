import amqp from 'amqp';

import EventEmitter from 'events';

class EventedStub extends EventEmitter {}

exports.examples = function(expect, sinon) {
  describe('.subscribe(queueObject)', function() {
    before(function() {
      this.queueConfig = {serverUrl: 'amqp://localhost:5672/%2F', queue: '13fe4dd7-9073-4507-a0c3-32403753f7c0'}
      this.subscribeStub = sinon.stub().callsArgWithAsync(0, "hello, world!");
      this.queueStub = sinon.stub().yields({subscribe: this.subscribeStub});
      this.connectionStub = new EventedStub;
      this.connectionStub.queue = this.queueStub;
      this.createConnectionStub = sinon.stub(amqp, 'createConnection').returns(this.connectionStub);
      this.subject.subscribe(this.queueConfig);
    });

    it('creates an AMQP connection using the provided serverUrl and ItemSense credentials.', function() {

      let createConnectionArgs = [{
        url: this.queueConfig.serverUrl,
        login: this.itemsenseConfig.username,
        password: this.itemsenseConfig.password
      }, { reconnect: false }];



      sinon.assert.calledWith(this.createConnectionStub, ...createConnectionArgs);
    });

    it('waits for AMQP connection to be ready, then subscribes to the queue when the queue is ready', function() {
      const queueOptions = {
        durable: true,
        noDeclare: true,
        arguments: {"x-expires": 3600000, "x-message-ttl": 3600000, "x-max-length-bytes": 1073741824}
      };

      sinon.assert.notCalled(this.queueStub);
      this.connectionStub.emit('ready');
      sinon.assert.calledWith(this.queueStub, this.queueConfig.queue);
      sinon.assert.called(this.subscribeStub);
    });
  });
}
