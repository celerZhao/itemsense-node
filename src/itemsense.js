import { ItemsenseApiService } from './services/itemsense-api.service';
import { AuthenticationController } from './controllers/authentication.controller';
import { CurrentZoneMapController } from './controllers/current-zone-map.controller';
import { EventController } from './controllers/event.controller';
import { FacilityController } from './controllers/facility.controller';
import { JobController } from './controllers/job.controller';
import { ReaderConfigurationController } from './controllers/reader-configuration.controller';
import { ReaderDefinitionController } from './controllers/reader-definition.controller';
import { RecipeController } from './controllers/recipe.controller';
import { UserController } from './controllers/user.controller';
import { ZoneMapController } from './controllers/zone-map.controller';
import { ItemController } from './controllers/item.controller';
import { MessageQueueController } from './controllers/message-queue.controller';
import { HealthController } from './controllers/health.controller';
import { SoftwareImageController } from './controllers/software-image.controller';
import { SoftwareUpgradeController } from './controllers/software-upgrade.controller';
import { SoftwareVersionController } from './controllers/software-version.controller';
import { SettingsController } from './controllers/settings.controller';
import { AntennaConfigurationsController } from './controllers/antenna-configuration.controller';
import { ThresholdsController } from './controllers/thresholds.controller';
import { ConfigurationController } from './controllers/support/configuration.controller';
import { LogsController } from './controllers/support/logs.controller';
import { TransitionController } from './controllers/transition.controller';

export class ItemSense {

  constructor(itemSenseConfig) {
    this._itemsenseConfig = itemSenseConfig;

    this._itemsenseService = new ItemsenseApiService(this);
    this._wm = new Map();
    // controllers for client
    this._wm.set('authenticationController', new AuthenticationController(this._itemsenseService));
    this._wm.set('currentZoneMapController', new CurrentZoneMapController(this._itemsenseService));
    this._wm.set('eventController', new EventController(this._itemsenseService));
    this._wm.set('facilityController', new FacilityController(this._itemsenseService));
    this._wm.set('jobController', new JobController(this._itemsenseService));
    this._wm.set('readerConfigurationController', new ReaderConfigurationController(this._itemsenseService));
    this._wm.set('readerDefinitionController', new ReaderDefinitionController(this._itemsenseService));
    this._wm.set('recipeController', new RecipeController(this._itemsenseService));
    this._wm.set('userController', new UserController(this._itemsenseService));
    this._wm.set('zoneMapController', new ZoneMapController(this._itemsenseService));
    this._wm.set('itemController', new ItemController(this._itemsenseService));
    this._wm.set('messageQueueController', new MessageQueueController(this._itemsenseService, this));
    this._wm.set('healthController', new HealthController(this._itemsenseService));
    this._wm.set('softwareImageController', new SoftwareImageController(this._itemsenseService));
    this._wm.set('softwareUpgradeController', new SoftwareUpgradeController(this._itemsenseService));
    this._wm.set('softwareVersionController', new SoftwareVersionController(this._itemsenseService));
    this._wm.set('settingsController', new SettingsController(this._itemsenseService));
    this._wm.set('antennaConfigurationsController', new AntennaConfigurationsController(this._itemsenseService));
    this._wm.set('thresholdsController', new ThresholdsController(this._itemsenseService));
    this._wm.set('configurationController', new ConfigurationController(this._itemsenseService));
    this._wm.set('logsController', new LogsController(this._itemsenseService));
    this._wm.set('transitionController', new TransitionController(this._itemsenseService));
  }

  get itemsenseUrl() {
    return this._itemsenseConfig.itemsenseUrl;
  }

  get authorizationHeader() {
    const { username, password, authToken } = this._itemsenseConfig;

    if (authToken) {
      return `Token { "token": "${authToken}" }`;
    }
    return `Basic ${new Buffer.from(`${username}:${password}`, 'utf8').toString('base64')}`;
  }

  get authentication() {
    return this._wm.get('authenticationController');
  }

  get currentZoneMap() {
    return this._wm.get('currentZoneMapController');
  }

  get events() {
    return this._wm.get('eventController');
  }

  get facilities() {
    return this._wm.get('facilityController');
  }

  get jobs() {
    return this._wm.get('jobController');
  }

  get readerConfigurations() {
    return this._wm.get('readerConfigurationController');
  }

  get readerDefinitions() {
    return this._wm.get('readerDefinitionController');
  }

  get recipes() {
    return this._wm.get('recipeController');
  }

  get users() {
    return this._wm.get('userController');
  }

  get zoneMaps() {
    return this._wm.get('zoneMapController');
  }

  get items() {
    return this._wm.get('itemController');
  }

  get messageQueue() {
    return this._wm.get('messageQueueController');
  }

  get health() {
    return this._wm.get('healthController');
  }

  get softwareImages() {
    return this._wm.get('softwareImageController');
  }

  get softwareUpgrades() {
    return this._wm.get('softwareUpgradeController');
  }

  get softwareVersions() {
    return this._wm.get('softwareVersionController');
  }

  get settings() {
    return this._wm.get('settingsController');
  }

  get antennaConfigurations() {
    return this._wm.get('antennaConfigurationsController');
  }

  get thresholds() {
    return this._wm.get('thresholdsController');
  }

  get configuration() {
    return this._wm.get('configurationController');
  }

  get logs() {
    return this._wm.get('logsController');
  }

  get transitions() {
    return this._wm.get('transitionController');
  }
}

module.exports = ItemSense;
