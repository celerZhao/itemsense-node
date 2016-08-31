import {Health} from '../models/coordinator/health.model.js';

export class HealthController {
	constructor(itemsenseService) {
		this.model = new Health();
		this.itemsenseService = itemsenseService;
	}

	events(queryObject) {
		return this.itemsenseService.makeRequest(this.model, Health.requestTypes.EVENTS, queryObject);
	}

	configureQueue(queueObject) {
		return this.itemsenseService.makeRequest(this.model, Health.requestTypes.QUEUE, queueObject);
	}
}
