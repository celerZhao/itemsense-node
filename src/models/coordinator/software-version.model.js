import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class SoftwareVersion extends ItemSenseEndpoint {
  constructor() {
    const path = '/configuration/v1/softwareVersions';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      CREATE: {
        endpoint: 'createOrReplace',
        method: 'PUT'
      },
      DESTROY: {
        endpoint: 'destroy',
        method: 'DELETE'
      },
      LIST: {
        endpoint: 'list',
        method: 'GET'
      },
      SHOW: {
        endpoint: 'show',
        method: 'GET'
      },
      UPDATE: {
        endpoint: 'updatePolicy',
        method: 'PUT'
      }
    };
  }
}
