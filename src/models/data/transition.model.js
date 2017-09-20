import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class Transition extends ItemSenseEndpoint {

  constructor() {
    const path = '/data/v1/items/show/transitions';
    const endpointInfo = { path };
    super(endpointInfo);
  }


  static get requestTypes() {
    return {
      GET: {
        endpoint: '',
        method: 'GET',
      },
    };
  }
}
