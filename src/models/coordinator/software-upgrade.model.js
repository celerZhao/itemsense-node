/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';


import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';



export class SoftwareUpgrade extends ItemSenseEndpoint{


  constructor(){
    let path = '/control/v1/upgrades';
    let endpointInfo = {path: path };
    super(endpointInfo);
  }
  static get requestTypes(){
    return {
      GET:{
        endpoint:'show',
        method: 'GET'
      },
      START:{
        endpoint:'start',
        method: 'POST'
      },
      STOP:{
        endpoint:'stop',
        method: 'POST'
      },
      TRIGGER:{
        endpoint: 'trigger/direct/devices',
        method: 'POST'
      }
    };
  }
}
