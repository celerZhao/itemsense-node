import { Event } from '../models/coordinator/event.model';

export class EventController {

  constructor(itemsenseService) {
    this.model = new Event();
    this.itemsenseService = itemsenseService;
  }

  getAllBrokers() {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.BROKER_GET_ALL
    );
  }

  getBroker(brokerName) {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.BROKER_GET,
      null,
      brokerName
    );
  }

  updateBroker(brokerId, brokerDefinition) {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.BROKER_UPDATE,
      brokerId,
      brokerDefinition
    );
  }

  createBroker(brokerDefinition) {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.BROKER_CREATE,
      brokerDefinition);
  }

  deleteBroker(brokerId) {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.BROKER_DELETE,
      null,
      brokerId
    );
  }

  getAllPublishers() {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.PUBLISHER_GET_ALL
    );
  }

  getPublisher(publisherName) {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.PUBLISHER_GET,
      null,
      publisherName
    );
  }

  updatePublisher(publisherId, publisherDefinition) {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.PUBLISHER_UPDATE,
      publisherId,
      publisherDefinition
    );
  }

  createPublisher(publisherDefinition) {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.PUBLISHER_CREATE,
      publisherDefinition);
  }

  deletePublisher(publisherId) {
    return this.itemsenseService.makeRequest(
      this.model,
      Event.requestTypes.PUBLISHER_DELETE,
      null,
      publisherId
    );
  }

}
