/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';


import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';



export class SoftwareImage extends ItemSenseEndpoint{


  constructor(){
    let path = '/configuration/v1/images';
    let endpointInfo = {path: path };
    super(endpointInfo);
  }
  static get requestTypes(){
    return {
      GET:{
        endpoint:'',
        method: 'GET'
      }
    };
  }
}
