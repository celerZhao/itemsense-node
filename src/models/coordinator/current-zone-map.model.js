import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class CurrentZoneMap extends ItemSenseEndpoint {
  constructor() {
    const path = '/control/v1/currentZoneMap';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      GET: {
        endpoint: 'show',
        method: 'GET'
      },
      UPDATE: {
        endpoint: 'select',
        method: 'POST'
      },
      DELETE: {
        endpoint: 'clear',
        method: 'DELETE'
      }
    };
  }
}
