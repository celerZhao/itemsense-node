import { MessageQueue} from './message-queue.service.js';

export class AmqpHandler {

	constructor(username, password) {
  	this.username = username;
  	this.password = password;
	}

  subscribe(queueObj) {
    const { username, password } = this.itemsenseService._itemsenseConfig;
    const { serverUrl, queue } = queueObj;
    return MessageQueue.subscribe(serverUrl, queue, username, password);
  }

  configureAndSubscribe(queueConfig) {
  	return new Promise((resolve) => {
  		this.configureQueue(queueConfig).then((queueObj) => {
	  		resolve(this.subscribe(queueObj));
	  	});
		});
  }
}