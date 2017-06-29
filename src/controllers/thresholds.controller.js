import { Thresholds } from '../models/coordinator/thresholds.model';

export class ThresholdsController {

  constructor(itemsenseService) {
    this.model = new Thresholds();
    this.itemsenseService = itemsenseService;
  }

  getAll(embed) {
    return this.itemsenseService.makeRequest(
      this.model,
      Thresholds.requestTypes.GET,
      null,
      null,
      embed ? { embed } : null
    );
  }

  get(thresholdId, embed) {
    return this.itemsenseService.makeRequest(
      this.model,
      Thresholds.requestTypes.GET,
      null,
      thresholdId,
      embed ? { embed } : null
    );
  }

  create(thresholdConf) {
    return this.itemsenseService.makeRequest(
      this.model,
      Thresholds.requestTypes.POST,
      thresholdConf
    );
  }

  update(thresholdId, thresholdConf) {
    return this.itemsenseService.makeRequest(
      this.model,
      Thresholds.requestTypes.PUT,
      thresholdConf,
      thresholdId
    );
  }

  delete(thresholdId) {
    return this.itemsenseService.makeRequest(
      this.model,
      Thresholds.requestTypes.DELETE,
      null,
      thresholdId
    );
  }
}
