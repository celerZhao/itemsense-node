import { Health } from '../models/coordinator/health.model.js';
import { AmqpHandler } from '../services/amqp-handler.service.js';

export class HealthController extends AmqpHandler {
	constructor(itemsenseService) {
		const { username, password } = itemsenseService._itemsenseConfig;
    super(username, password);

		this.model = new Health();
		this.itemsenseService = itemsenseService;
	}

	events(queryObject) {
		queryObject = queryObject || {};
		return this.itemsenseService.makeRequest(this.model, Health.requestTypes.EVENTS, queryObject);
	}

	configureQueue(queueObject) {
		return this.itemsenseService.makeRequest(this.model, Health.requestTypes.QUEUE, queueObject || {});
	}

	readers() {
		return this.itemsenseService.makeRequest(this.model, Health.requestTypes.READERS);
	}

	reader(readerId) {
		return this.itemsenseService.makeRequest(this.model, Health.requestTypes.READERS, null, readerId);
	}
}
