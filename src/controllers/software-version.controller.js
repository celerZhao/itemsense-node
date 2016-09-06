/**
 * Created by jcombopi on 2/26/16.
 */


'use strict';

import {SoftwareVersion} from '../models/coordinator/software-version.model.js';


export class SoftwareVersionController {

  constructor(itemsenseService) {
    this.model = new SoftwareVersion();
    this.itemsenseService = itemsenseService;
  }

  createOrReplace( softwareVersionData ) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareVersion.requestTypes.CREATE, softwareVersionData );
  }

  destroy( imageType, softwareVersionId ) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareVersion.requestTypes.DESTROY, null, `${imageType}/${softwareVersionId}`)
  }

  list( imageType ) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareVersion.requestTypes.LIST, null, imageType)
  }

  get( imageType, softwareVersionId ) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareVersion.requestTypes.SHOW, null, `${imageType}/${softwareVersionId}`)
  }

  update( versionPolicyObj ) {
    return this.itemsenseService.makeRequest(this.model, SoftwareVersion.requestTypes.UPDATE, versionPolicyObj )
  }
}
