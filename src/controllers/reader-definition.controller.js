import { ReaderDefinition } from '../models/coordinator/reader-definition.model';

export class ReaderDefinitionController {

  constructor(itemsenseService) {
    this.model = new ReaderDefinition();
    this.itemsenseService = itemsenseService;
  }

  get(readerDefinitionName) {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.SHOW,
      null,
      readerDefinitionName
    );
  }

  getAll() {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.SHOW
    );
  }

  create(readerDefinition) {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.CREATE,
      readerDefinition
    );
  }

  update(readerDefinition) {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.UPDATE,
      readerDefinition
    );
  }

  delete(readerDefinitionName) {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.DELETE,
      null,
      readerDefinitionName
    );
  }

  groups() {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.GROUPS
    );
  }

  getAllFeatures(readerDefinitionName) {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.GET,
      null,
      `${readerDefinitionName}/featureChanges`
    );
  }

  setFeature(readerDefinitionName, targetState) {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.POST,
      targetState,
      `${readerDefinitionName}/featureChanges`
    );
  }

  getFeature(readerDefinitionName, featureName) {
    return this.itemsenseService.makeRequest(
      this.model,
      ReaderDefinition.requestTypes.GET,
      null,
      `${readerDefinitionName}/featureChanges/${featureName}`
    );
  }
}
