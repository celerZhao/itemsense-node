/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

import { MessageQueue } from '../models/data/message-queue.model.js';



export class MessageQueueController {

  constructor(itemsenseService, is) {
    this.model = new MessageQueue();
    this.itemsenseService = itemsenseService;
    this.is = is;
  }

  // maintained for backwards compatability
  configure(messageQueue) {
    return this.is.items.configureQueue(messageQueue);
  }

}
