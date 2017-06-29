import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Configuration extends ItemSenseEndpoint {
  constructor() {
    const path = '/support/v1/configuration';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      GET: {
        method: 'GET'
      }
    };
  }
}
