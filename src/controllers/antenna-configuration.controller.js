import { AntennaConfigurations } from '../models/coordinator/antenna-configuration.model';

export class AntennaConfigurationsController {

  constructor(itemsenseService) {
    this.model = new AntennaConfigurations();
    this.itemsenseService = itemsenseService;
  }

  getAll() {
    return this.itemsenseService.makeRequest(
      this.model,
      AntennaConfigurations.requestTypes.GET
    );
  }

  get(antennaConfId) {
    return this.itemsenseService.makeRequest(
      this.model,
      AntennaConfigurations.requestTypes.GET,
      null,
      antennaConfId
    );
  }

  create(antennaConf) {
    return this.itemsenseService.makeRequest(
      this.model,
      AntennaConfigurations.requestTypes.POST,
      antennaConf
    );
  }

  update(antennaConfId, antennaConf) {
    return this.itemsenseService.makeRequest(
      this.model,
      AntennaConfigurations.requestTypes.PUT,
      antennaConf,
      antennaConfId
    );
  }

  delete(antennaConfId) {
    return this.itemsenseService.makeRequest(
      this.model,
      AntennaConfigurations.requestTypes.DELETE,
      null,
      antennaConfId
    );
  }
}
