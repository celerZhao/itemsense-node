import amqp from 'amqp';
import { EventEmitter } from 'events';

export class MessageQueue extends EventEmitter {
  constructor(url, queue, login, password) {
    super();
    let connection = amqp.createConnection({
      url,
      login,
      password
    }, {reconnect: false});
    let emitter = new EventEmitter;
    connection.on('ready', function() {
      connection.queue(queue, {
        durable: true,
        noDeclare: true,
        arguments: {"x-expires": 3600000, "x-message-ttl": 3600000, "x-max-length-bytes": 1073741824}
      }, function(queue) {
        queue.subscribe(function(msg) {
          emitter.emit('data', JSON.parse(msg.data));
        });
      });
    });

    connection.on("error", function (err) {
     console.log(err);
    });
    return emitter;
  }

  static subscribe(url, queue, login, password) {
    return new this(...arguments);
  }
}
