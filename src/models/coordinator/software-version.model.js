/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';


import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';



export class SoftwareVersion extends ItemSenseEndpoint{


  constructor() {
    let path = '/configuration/v1/softwareVersions';
    let endpointInfo = {path: path };
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
