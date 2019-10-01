import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Event extends ItemSenseEndpoint {
  constructor() {
    const path = '/configuration/v1/events';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      BROKER_GET_ALL: {
        endpoint: 'brokers',
        method: 'GET'
      },
      BROKER_CREATE: {
        endpoint: 'brokers',
        method: 'POST'
      },
      BROKER_GET: {
        endpoint: 'brokers',
        method: 'GET'
      },
      BROKER_UPDATE: {
        endpoint: 'brokers',
        method: 'PUT'
      },
      BROKER_DELETE: {
        endpoint: 'brokers',
        method: 'DELETE'
      },
      BROKER_TEST: {
        endpoint: 'brokers',
        method: 'POST'
      },
      PUBLISHER_GET_ALL: {
        endpoint: 'publishers',
        method: 'GET'
      },
      PUBLISHER_CREATE: {
        endpoint: 'publishers',
        method: 'POST'
      },
      PUBLISHER_GET: {
        endpoint: 'publishers',
        method: 'GET'
      },
      PUBLISHER_UPDATE: {
        endpoint: 'publishers',
        method: 'PUT'
      },
      PUBLISHER_DELETE: {
        endpoint: 'publishers',
        method: 'DELETE'
      },
      PUBLISHER_TEST: {
        endpoint: 'publishers',
        method: 'POST'
      }
    };
  }
}
