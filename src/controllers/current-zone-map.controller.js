import { CurrentZoneMap } from '../models/coordinator/current-zone-map.model';

export class CurrentZoneMapController {

  constructor(itemsenseService) {
    this.model = new CurrentZoneMap();
    this.itemsenseService = itemsenseService;
  }

  get(facilityName) {
    return this.itemsenseService.makeRequest(
      this.model,
      CurrentZoneMap.requestTypes.GET,
      null,
      facilityName
    );
  }

  update(zoneMapName) {
    return this.itemsenseService.makeRequest(
      this.model,
      CurrentZoneMap.requestTypes.UPDATE,
      null,
      zoneMapName
    );
  }

  clear(facilityName) {
    return this.itemsenseService.makeRequest(
      this.model,
      CurrentZoneMap.requestTypes.DELETE,
      null,
      facilityName
    );
  }

}
