/**
 * Created by jcombopi on 2/26/16.
 */


'use strict';

import {SoftwareImage} from '../models/coordinator/software-image.model.js';


export class SoftwareImageController {

  constructor(itemsenseService) {
    this.model = new SoftwareImage();
    this.itemsenseService = itemsenseService;
  }

  get(imageType, imageName) {
    return this.itemsenseService.makeRequest(this.model, SoftwareImage.requestTypes.GET, null, `${imageType}/${imageName}`);
  }

}
