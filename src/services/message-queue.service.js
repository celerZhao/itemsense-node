import amqp from 'amqp';
import { EventEmitter } from 'events';

export class MessageQueue extends EventEmitter {
  constructor(login, password) {
    super();
    this._connectionConfig = { login, password };
    this.queueConfig = {
      durable: true,
      noDeclare: true,
      arguments: { 'x-expires': 3600000, 'x-message-ttl': 3600000, 'x-max-length-bytes': 1073741824 }
    };
  }

  subscribe(serverUrl, queueId) {
    this._connectionConfig.url = serverUrl;
    this.queueId = queueId;
    this.createConnection()
    .then((connection) => {
      this.emit('connectionEstablished', connection);
      return this.createQueue(connection);
    })
    .then((newQueue) => {
      this.emit('queueEstablished', newQueue);
      return this.createSubscription(newQueue);
    });
  }

  createConnection() {
    return new Promise((resolve) => {
      const connection = amqp.createConnection(this._connectionConfig, { reconnect: false });
      connection.on('ready', () => resolve(connection));
      connection.on('error', (err) => {
        this.emit('error', err);
      });
    });
  }

  createQueue(connection) {
    return new Promise((resolve) => {
      connection.queue(this.queueId, this.queueConfig, queue => resolve(queue));
    });
  }

  createSubscription(queue) {
    queue.subscribe((msg) => {
      this.emit('data', JSON.parse(msg.data));
    });
    this.emit('listening');
  }

  static subscribe(serverUrl, queueId, login, password) {
    const mq = new this(login, password);
    mq.subscribe(serverUrl, queueId);
    return mq;
  }
}
