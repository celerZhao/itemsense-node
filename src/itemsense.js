/**
 * Created by jcombopi on 2/25/16.
 */

import { ItemsenseApiService } from './services/itemsense-api.service.js';
import { AuthenticationController } from './controllers/authentication.controller.js';
import { CurrentZoneMapController } from './controllers/current-zone-map.controller.js';
import { FacilityController } from './controllers/facility.controller.js';
import { JobController } from './controllers/job.controller.js';
import { ReaderConfigurationController } from './controllers/reader-configuration.controller.js';
import { ReaderDefinitionController } from './controllers/reader-definition.controller.js';
import { RecipeController } from './controllers/recipe.controller.js';
import { UserController } from './controllers/user.controller.js';
import { ZoneMapController } from './controllers/zone-map.controller.js';
import { ItemController } from './controllers/item.controller.js';
import { MessageQueueController } from './controllers/message-queue.controller.js';
import { HealthController } from './controllers/health.controller.js';
import { SoftwareImageController } from './controllers/software-image.controller.js';
import { SoftwareUpgradeController } from './controllers/software-upgrade.controller.js';
import { SoftwareVersionController } from './controllers/software-version.controller.js';
import { SettingsController } from './controllers/settings.controller.js';

export class ItemSense {

  constructor(itemSenseConfig) {
    this._itemsenseConfig = itemSenseConfig;
    this._itemsenseService = new ItemsenseApiService(this);
    this._wm = new Map();
    //controllers for client
    this._wm.set('authenticationController', new AuthenticationController(this._itemsenseService));
    this._wm.set('currentZoneMapController', new CurrentZoneMapController(this._itemsenseService));
    this._wm.set('facilityController', new FacilityController(this._itemsenseService));
    this._wm.set('jobController',  new JobController(this._itemsenseService));
    this._wm.set('readerConfigurationController', new ReaderConfigurationController(this._itemsenseService));
    this._wm.set('readerDefinitionController', new ReaderDefinitionController(this._itemsenseService));
    this._wm.set('recipeController', new RecipeController(this._itemsenseService));
    this._wm.set('userController', new UserController(this._itemsenseService));
    this._wm.set('zoneMapController', new ZoneMapController(this._itemsenseService));
    this._wm.set('itemController', new ItemController(this._itemsenseService));
    this._wm.set('messageQueueController', new MessageQueueController(this._itemsenseService));
    this._wm.set('healthController', new HealthController(this._itemsenseService));
    this._wm.set('softwareImageController', new SoftwareImageController(this._itemsenseService));
    this._wm.set('softwareUpgradeController', new SoftwareUpgradeController(this._itemsenseService));
    this._wm.set('softwareVersionController', new SoftwareVersionController(this._itemsenseService));
    this._wm.set('settingsController', new SettingsController(this._itemsenseService));
  }

  get itemsenseUrl() {
    return this._itemsenseConfig.itemsenseUrl;
  }


  get authorizationHeader() {
    let { username, password, authToken } = this._itemsenseConfig;

    if (authToken) {
      return `Token { "token": "${authToken }" }`;
    } else {
      return 'Basic ' + new Buffer(username + ':' + password, 'utf8').toString('base64');
    }
  }


  get authentication() {
    return this._wm.get('authenticationController');
  }

  get currentZoneMap() {
    return this._wm.get('currentZoneMapController');
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

}

module.exports = ItemSense;
