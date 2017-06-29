import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Item extends ItemSenseEndpoint {
  constructor() {
    const path = '/data/v1/items';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      GET: {
        endpoint: 'show',
        method: 'GET'
      },
      HISTORY: {
        endpoint: 'show/history',
        method: 'GET'
      }
    };
  }
}
