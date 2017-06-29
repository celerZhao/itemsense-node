import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Job extends ItemSenseEndpoint {
  constructor() {
    const path = '/control/v1/jobs';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      START: {
        endpoint: 'start',
        method: 'POST'
      },
      STOP: {
        endpoint: 'stop',
        method: 'POST'
      },
      GET: {
        endpoint: 'show',
        method: 'GET'
      },
      STATS: {
        endpoint: 'stats',
        method: 'GET'
      }
    };
  }
}
