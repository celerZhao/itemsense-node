import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class MessageQueue extends ItemSenseEndpoint {
  constructor() {
    const path = '/data/v1/items';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      CONFIGURE: {
        endpoint: 'queues',
        method: 'PUT',
      },
      CONFIGURETHRESHOLD: {
        endpoint: 'queues/threshold',
        method: 'PUT',
      },
    };
  }
}
