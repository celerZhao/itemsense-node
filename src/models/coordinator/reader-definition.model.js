import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class ReaderDefinition extends ItemSenseEndpoint {
  constructor() {
    const path = '/configuration/v1/readerDefinitions';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      SHOW: {
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
      },
      GET: {
        method: 'GET'
      },
      GROUPS: {
        endpoint: 'groups',
        method: 'GET'
      },
      POST: {
        method: 'POST'
      }
    };
  }
}

