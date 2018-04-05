import MessageQueue from './message-queue.service';

export class AmqpHandler {

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  subscribe(queueInfo) {
    const { username, password } = this.itemsenseService._itemsenseConfig;
    const { serverUrl, queue: queueId } = queueInfo;
    return MessageQueue.subscribe(serverUrl, queueId, username, password);
  }

  configureAndSubscribe(filter = {}, options = {}) {
    return new Promise((resolve, reject) => {
      this.configureQueue(filter, options).then((queueInfo) => {
        resolve(this.subscribe(queueInfo));
      })
      .catch(e => reject(e));
    });
  }
}
