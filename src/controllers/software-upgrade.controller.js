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
}
