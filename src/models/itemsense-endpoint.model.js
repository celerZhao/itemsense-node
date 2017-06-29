import querystring from 'querystring';

export class ItemSenseEndpoint {
  constructor(entityInfo) {
    this._path = entityInfo.path;
  }

  get path() {
    return this._path;
  }

  get requestTypes() {
    return this._requestTypes;
  }

  getRequestUrl(requestType, id, queryParams) {
    let url = this._path;
    if (requestType.endpoint) {
      url += `/${requestType.endpoint}`;
    }

    if (id) {
      url += `/${id}`;
    }

    if (queryParams) {
      url += `?${querystring.stringify(queryParams)}`;
    }
    return url;
  }
}
