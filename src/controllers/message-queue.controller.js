import { MessageQueue } from '../models/data/message-queue.model';

export class MessageQueueController {

  constructor(itemsenseService, is) {
    this.model = new MessageQueue();
    this.itemsenseService = itemsenseService;
    this.is = is;
  }

  // maintained for backwards compatibility
  configure(messageQueue) {
    return this.is.items.configureQueue(messageQueue, {});
  }

}
