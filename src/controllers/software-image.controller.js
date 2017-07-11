import { SoftwareImage } from '../models/coordinator/software-image.model';

export class SoftwareImageController {
  constructor(itemsenseService) {
    this.model = new SoftwareImage();
    this.itemsenseService = itemsenseService;
  }

  get(imageType, imageName) {
    return this.itemsenseService.makeRequest(
      this.model,
      SoftwareImage.requestTypes.GET,
      null,
      `${imageType}/${imageName}`
    );
  }
}
