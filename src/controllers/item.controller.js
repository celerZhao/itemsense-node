import { Item } from '../models/data/item.model';
import { MessageQueue } from '../models/data/message-queue.model';
import { AmqpHandler } from '../services/amqp-handler.service';

export class ItemController extends AmqpHandler {

  constructor(itemsenseService) {
    const { username, password } = itemsenseService._itemsenseConfig;
    super(username, password);

    this.model = new Item();
    this.queueModel = new MessageQueue();
    this.itemsenseService = itemsenseService;
  }

  get(queryParams) {
    return this.itemsenseService.makeRequest(
      this.model,
      Item.requestTypes.GET,
      null,
      null,
      queryParams
    );
  }

  getHistory(queryParams) {
    return this.itemsenseService.makeRequest(
      this.model,
      Item.requestTypes.HISTORY,
      null,
      null,
      queryParams
    );
  }

  configureQueue(messageQueue) {
    return this.itemsenseService.makeRequest(
      this.queueModel,
      MessageQueue.requestTypes.CONFIGURE,
      messageQueue
    );
  }

}
