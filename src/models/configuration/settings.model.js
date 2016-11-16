/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';


import { ItemSenseEndpoint } from '../itemsense-endpoint.model.js';

export class Settings extends ItemSenseEndpoint{

  constructor() {
    let path = 'configuration/v1/settings';
    let endpointInfo = { path: path };
    super(endpointInfo);
  }


  static get requestTypes() {
    return {
      GET: {
        endpoint: 'SNMP',
        method: 'GET'
      },
      CONFIGURE: {
        endpoint: 'SNMP',
        method: 'PUT'
      },
      DISABLE: {
        endpoint: 'SNMP',
        method: 'DELETE'
      }
    };
  }


}
