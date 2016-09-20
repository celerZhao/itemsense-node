/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

import { MessageQueue } from '../models/data/message-queue.model.js';



export class MessageQueueController {

  constructor(itemsenseService) {
    this.model = new MessageQueue();
    this.itemsenseService = itemsenseService;
  }

  // maintained for backwards compatability
  configure(messageQueue) {
    return this.configureQueue(messageQueue);
  }

}
