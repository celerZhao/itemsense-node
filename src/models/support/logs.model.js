import { ItemSenseEndpoint } from '../itemsense-endpoint.model';


export class Logs extends ItemSenseEndpoint {
  constructor() {
    const path = '/support/v1/logs';
    const endpointInfo = { path };
    super(endpointInfo);
  }

  static get requestTypes() {
    return {
      GET: {
        method: 'GET'
      }
    };
  }
}
