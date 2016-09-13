import amqp from 'amqp';
import { EventEmitter } from 'events';

export class MessageQueue extends EventEmitter {
  constructor(url, queue, login, password) {
    super();
    this._connectionConfig = {url, login, password};
    this.queue = queue;
    this.queueConfig = {
        durable: true,
        noDeclare: true,
        arguments: {"x-expires": 3600000, "x-message-ttl": 3600000, "x-max-length-bytes": 1073741824}
      }
  }

  subscribe() {
    this.createConnection()
    .then((connection) => this.createQueue(connection))
    .then((queue) => this.createSubscription(queue));
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
  }

  static subscribe(url, queue, login, password) {
    const mq = new this(...arguments);
    mq.subscribe();
    return mq;
  }
}
