import { Configuration } from '../../models/support/configuration.model';
import { writeFile } from '../../services/file.service';

export class ConfigurationController {
  constructor(itemsenseService) {
    this.model = new Configuration();
    this.itemsenseService = itemsenseService;
  }

  getAll(writeLocation) {
    return this.itemsenseService.makeNativeRequest(
      this.model,
      Configuration.requestTypes.GET,
      null,
      null,
      null,
      true,
    ).then((configsTarBall) => {
      if (writeLocation) return writeFile(configsTarBall, writeLocation);
      return Promise.resolve(configsTarBall);
    });
  }
}
