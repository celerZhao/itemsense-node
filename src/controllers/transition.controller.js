import { Transition } from '../models/data/transition.model';
import { MessageQueue } from '../models/data/message-queue.model';
import { AmqpHandler } from '../services/amqp-handler.service';

export class TransitionController extends AmqpHandler {
  constructor(itemsenseService) {
    const { username, password } = itemsenseService._itemsenseConfig;
    super(username, password);

    this.model = new Transition();
    this.queueModel = new MessageQueue();
    this.itemsenseService = itemsenseService;
  }

  get(queryParams) {
    return this.itemsenseService.makeRequest(
      this.model,
      Transition.requestTypes.GET,
      null,
      null,
      queryParams
    );
  }

  configureQueue(messageQueue) {
    return this.itemsenseService.makeRequest(
      this.queueModel,
      MessageQueue.requestTypes.CONFIGURETHRESHOLD,
      messageQueue || {}
    );
  }
}
