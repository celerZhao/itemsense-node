import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Health extends ItemSenseEndpoint {
  constructor() {
    const path = '/health/v1';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      EVENTS: {
        endpoint: 'events',
        method: 'POST'
      },
      QUEUE: {
        endpoint: 'events/queues',
        method: 'PUT'
      },
      READERS: {
        endpoint: 'readers',
        method: 'GET'
      }
    };
  }
}
