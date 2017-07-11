import { Settings } from '../models/configuration/settings.model';

export class SettingsController {

  constructor(itemsenseService) {
    this.model = new Settings();
    this.itemsenseService = itemsenseService;
  }

  get() {
    return this.itemsenseService.makeRequest(this.model, Settings.requestTypes.GET);
  }

  configure(settingsOptions) {
    return this.itemsenseService.makeRequest(
      this.model,
      Settings.requestTypes.CONFIGURE,
      settingsOptions
    );
  }

  disable() {
    return this.itemsenseService.makeRequest(this.model, Settings.requestTypes.DISABLE);
  }

}
