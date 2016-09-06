/**
 * Created by jcombopi on 2/26/16.
 */


'use strict';

import {SoftwareUpgrade} from '../models/coordinator/software-upgrade.model.js';


export class SoftwareUpgradeController {

  constructor(itemsenseService){
    this.model = new SoftwareUpgrade();
    this.itemsenseService = itemsenseService;
  }
  getAll(){
    return this.itemsenseService.makeRequest(this.model, SoftwareUpgrade.requestTypes.GET );
  }
  get(upgradeInstanceId) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareUpgrade.requestTypes.GET, null, upgradeInstanceId );
  }

  start(upgradeData) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareUpgrade.requestTypes.START, upgradeData);
  }
  stop(upgradeInstanceId) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareUpgrade.requestTypes.STOP, null, upgradeInstanceId);
  }
  trigger(dataForUpgrade) {
  	return this.itemsenseService.makeRequest(this.model, SoftwareUpgrade.requestTypes.TRIGGER, dataForUpgrade);
  }
}
