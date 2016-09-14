/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

import { MessageQueue } from '../models/data/message-queue.model.js';
import { AmqpHandler } from '../services/amqp-handler.service.js';



export class MessageQueueController extends AmqpHandler {

  constructor(itemsenseService) {
  	const { username, password } = itemsenseService._itemsenseConfig;
    super(username, password);

    this.model = new MessageQueue();
    this.itemsenseService = itemsenseService;
  }


  configureQueue(messageQueue) {
    return this.itemsenseService.makeRequest(this.model, MessageQueue.requestTypes.CONFIGURE, messageQueue);
  }

  // maintained for backwards compatability
  configure(messageQueue) {
    return this.configureQueue(messageQueue);
  }

}
