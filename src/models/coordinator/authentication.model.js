import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Authentication extends ItemSenseEndpoint {
  constructor() {
    const path = '/authentication/v1';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      CREATE: {
        endpoint: 'token',
        method: 'PUT'
      },
      CREATE_CURRENT: {
        endpoint: 'token',
        method: 'GET'
      },
      VALIDATE: {
        endpoint: 'validateToken',
        method: 'GET'
      },
      LIST: {
        endpoint: 'listTokens',
        method: 'GET'
      },
      REVOKE: {
        endpoint: 'revokeToken',
        method: 'PUT'
      },
      REVOKE_ALL: {
        endpoint: 'revokeTokens',
        method: 'PUT'
      }
    };
  }
}
