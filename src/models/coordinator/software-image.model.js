import { ItemSenseEndpoint } from '../itemsense-endpoint.model';

export class SoftwareImage extends ItemSenseEndpoint {
  constructor() {
    const path = '/configuration/v1/images';
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
