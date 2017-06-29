import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Thresholds extends ItemSenseEndpoint {
  constructor() {
    const path = '/configuration/v1/thresholds';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      GET: {
        method: 'GET'
      },

      POST: {
        method: 'POST'
      },

      PUT: {
        method: 'PUT'
      },

      DELETE: {
        method: 'DELETE'
      }
    };
  }
}
