import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class AntennaConfigurations extends ItemSenseEndpoint {
  constructor() {
    const path = '/configuration/v1/thresholds/antennaConfigurations';
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
