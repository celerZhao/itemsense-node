import { Facility } from '../models/coordinator/facility.model';

export class FacilityController {

  constructor(itemsenseService) {
    this.model = new Facility();
    this.itemsenseService = itemsenseService;
  }

  get(facilityName) {
    return this.itemsenseService.makeRequest(
      this.model,
      Facility.requestTypes.GET,
      null,
      facilityName
    );
  }

  getAll() {
    return this.itemsenseService.makeRequest(this.model, Facility.requestTypes.GET);
  }

  create(name) {
    return this.itemsenseService.makeRequest(this.model, Facility.requestTypes.CREATE, { name });
  }

  createOrReplace(name) {
    return this.itemsenseService.makeRequest(this.model, Facility.requestTypes.UPDATE, { name });
  }

  update(name) {
    return this.createOrReplace(name);
  }

  delete(facilityName) {
    return this.itemsenseService.makeRequest(
      this.model,
      Facility.requestTypes.DELETE,
      null,
      facilityName
    );
  }
}
