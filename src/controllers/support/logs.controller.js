import { Logs } from '../../models/support/logs.model';
import { writeFile } from '../../services/file.service';

export class LogsController {
  constructor(itemsenseService) {
    this.model = new Logs();
    this.itemsenseService = itemsenseService;
  }

  get(queryParams, writeLocation) {
    return this.itemsenseService.makeNativeRequest(
      this.model,
      Logs.requestTypes.GET,
      null,
      null,
      queryParams,
      true
    ).then((logsTarBall) => {
      if (writeLocation) return writeFile(logsTarBall, writeLocation);
      return Promise.resolve(logsTarBall);
    });
  }
}
