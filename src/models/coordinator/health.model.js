import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';

export class Health extends ItemSenseEndpoint {
	constructor() {
		let path = '/health/v1';
		let endpointInfo = { path };

		super( endpointInfo );
	}

	static get requestTypes() {
		return {
			EVENTS: {
				endpoint: 'events',
				method: 'POST'
			}
		}
	}
}
