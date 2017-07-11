import { Job } from '../models/coordinator/job.model';

export class JobController {

  constructor(itemsenseService) {
    this.model = new Job();
    this.itemsenseService = itemsenseService;
  }

  get(id) {
    return this.itemsenseService.makeRequest(this.model, Job.requestTypes.GET, null, id);
  }

  getAll() {
    return this.itemsenseService.makeRequest(this.model, Job.requestTypes.GET);
  }

  start(job) {
    return this.itemsenseService.makeRequest(this.model, Job.requestTypes.START, job);
  }

  stop(id) {
    return this.itemsenseService.makeRequest(this.model, Job.requestTypes.STOP, null, id);
  }

  stats(id) {
    return this.itemsenseService.makeRequest(this.model, Job.requestTypes.STATS, null, id);
  }

}
