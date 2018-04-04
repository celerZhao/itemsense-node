import { Health } from '../models/coordinator/health.model';
import { AmqpHandler } from '../services/amqp-handler.service';

export class HealthController extends AmqpHandler {
  constructor(itemsenseService) {
    const { username, password } = itemsenseService._itemsenseConfig;
    super(username, password);
    this.model = new Health();
    this.itemsenseService = itemsenseService;
  }

  events(queryObject = {}) {
    return this.itemsenseService.makeRequest(
      this.model,
      Health.requestTypes.EVENTS,
      queryObject
    );
  }

  configureQueue(filter, options) {
    return this.itemsenseService.makeRequest(
      this.model,
      Health.requestTypes.QUEUE,
      filter,
      null,
      options
    );
  }

  readers() {
    return this.itemsenseService.makeRequest(this.model, Health.requestTypes.READERS);
  }

  reader(readerId) {
    return this.itemsenseService.makeRequest(
      this.model,
      Health.requestTypes.READERS,
      null,
      readerId
    );
  }
}
