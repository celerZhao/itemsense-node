/**
 * Created by jcombopi on 2/26/16.
 */


'use strict';

import {SoftwareVersion} from '../models/coordinator/software-version.model.js';


export class SoftwareVersionController {

  constructor(itemsenseService){
    this.model = new SoftwareVersion();
    this.itemsenseService = itemsenseService;
  }

  create( softwareVersionData ) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareVersion.requestTypes.UPDATE, softwareVersionData );
  }
  destroy( imageType, softwareVersionId ) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareVersion.requestTypes.DESTROY, null, `${imageType}/${softwareVersionId}`)
  }
  list( imageType ) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareVersion.requestTypes.LIST, null, imageType)
  }
}
