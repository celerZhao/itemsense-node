import amqp from 'amqp';
import { EventEmitter } from 'events';

export class MessageQueue extends EventEmitter {
  constructor(login, password) {
    super();
    this._connectionConfig = {login, password};
    this.queueConfig = {
        durable: true,
        noDeclare: true,
        arguments: {"x-expires": 3600000, "x-message-ttl": 3600000, "x-max-length-bytes": 1073741824}
      }
  }

  subscribe(url, queue) {
    this._connectionConfig.url = url;
    this.queue = queue;
    this.createConnection()
    .then((connection) => {
      this.emit('status', 'connection');
      return this.createQueue(connection);
    })
    .then((queue) => {
      this.emit('status', 'queue');
      return this.createSubscription(queue);
    });
  }

  createConnection() {
    return new Promise((resolve) => {
      const connection = amqp.createConnection(this._connectionConfig, {reconnect: false});
      connection.on('ready', () => resolve(connection));
    });
  }

  createQueue(connection) {
    return new Promise((resolve, reject) => {
      connection.queue(this.queue, this.queueConfig, (queue) => resolve(queue));
    });
  }

  createSubscription(queue) {
    queue.subscribe((msg) => {
      this.emit('data', JSON.parse(msg.data));
    });
    this.emit('status', 'listening')
  }

  static subscribe(url, queue, login, password) {
    const mq = new this(login, password);
    mq.subscribe(url, queue);
    return mq;
  }
}
