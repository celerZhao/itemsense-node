import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class User extends ItemSenseEndpoint {
  constructor() {
    const path = '/configuration/v1/users';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get roles() {
    return ['Admin', 'ConfigManager', 'DataManager', 'JobRunner'];
  }

  static get requestTypes() {
    return {
      GET: {
        endpoint: 'show',
        method: 'GET'
      },
      GET_CURRENT: {
        endpoint: 'currentUser',
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
      },
      ROLES: {
        endpoint: 'roles/show',
        method: 'GET'
      }
    };
  }
}
