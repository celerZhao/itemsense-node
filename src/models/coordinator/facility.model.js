import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Facility extends ItemSenseEndpoint {
  constructor() {
    const path = '/configuration/v1/facilities';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      GET: {
        endpoint: 'show',
        method: 'GET'
      },
      CREATE: {
        endpoint: 'create',
        method: 'POST'
      },
      UPDATE: {
        endpoint: 'createOrReplace',
        method: 'PUT'
      },
      DELETE: {
        endpoint: 'destroy',
        method: 'DELETE'
      }
    };
  }
}
