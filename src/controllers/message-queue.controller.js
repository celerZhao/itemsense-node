/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

import { MessageQueue } from '../models/data/message-queue.model.js';

import { MessageQueue as MQ } from '../services/message-queue.service.js';


export class MessageQueueController {

  constructor(itemsenseService) {
  	const { username, password } = itemsenseService._itemsenseConfig;
  	this.username = username;
  	this.password = password;
    this.model = new MessageQueue();
    this.itemsenseService = itemsenseService;
  }

  configure(messageQueue) {
    return this.itemsenseService.makeRequest(this.model, MessageQueue.requestTypes.CONFIGURE, messageQueue);
  }


  subscribe(queueObj) {
    const { username, password } = this.itemsenseService._itemsenseConfig;
    const { serverUrl, queue } = queueObj;
    return MQ.subscribe(serverUrl, queue, username, password);
  }

  configureAndSubscribe(queueConfig) {
  	return new Promise((resolve) => {
  		this.configure(queueConfig).then((queueObj) => {
	  		resolve(this.subscribe(queueObj));
	  	});
		});
  }
}
