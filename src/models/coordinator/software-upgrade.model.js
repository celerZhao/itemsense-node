import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class SoftwareUpgrade extends ItemSenseEndpoint {
  constructor() {
    const path = '/control/v1/upgrades';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      GET: {
        endpoint: 'show',
        method: 'GET'
      },
      START: {
        endpoint: 'start',
        method: 'POST'
      },
      STOP: {
        endpoint: 'stop',
        method: 'POST'
      },
      TRIGGER: {
        endpoint: 'trigger/direct/devices',
        method: 'POST'
      }
    };
  }
}
