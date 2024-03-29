import { Authentication } from '../models/coordinator/authentication.model';

export class AuthenticationController {

  constructor(itemsenseService) {
    this.model = new Authentication();
    this.itemsenseService = itemsenseService;
  }

  getToken(username) {
    if (username) {
      return this.itemsenseService.makeRequest(
        this.model,
        Authentication.requestTypes.CREATE,
        null,
        username
      );
    }
    return this.itemsenseService.makeRequest(
      this.model,
      Authentication.requestTypes.CREATE_CURRENT
    );
  }

  validateToken(id) {
    return this.itemsenseService.makeRequest(
      this.model,
      Authentication.requestTypes.VALIDATE,
      null,
      id
    );
  }

  getAllTokens(username) {
    return this.itemsenseService.makeRequest(
      this.model,
      Authentication.requestTypes.LIST,
      null,
      username
    );
  }

  revokeToken(token) {
    return this.itemsenseService.makeRequest(
      this.model,
      Authentication.requestTypes.REVOKE,
      { token }
    );
  }

  revokeAllTokens(username) {
    return this.itemsenseService.makeRequest(
      this.model, Authentication.requestTypes.REVOKE_ALL,
      null, username
    );
  }
}
