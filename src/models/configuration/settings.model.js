import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Settings extends ItemSenseEndpoint {
  constructor() {
    const path = 'configuration/v1/settings';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      GET: {
        endpoint: 'SNMP',
        method: 'GET'
      },
      CONFIGURE: {
        endpoint: 'SNMP',
        method: 'PUT'
      },
      DISABLE: {
        endpoint: 'SNMP',
        method: 'DELETE'
      }
    };
  }
}
