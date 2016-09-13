/**
 * Created by jcombopi on 2/25/16.
 */


import request from 'request-promise';
import ItemsenseEndpoint from '../models/itemsense-endpoint.model.js';

export class ItemsenseApiService{

  constructor(itemsense) {
    this._itemsenseConfig = itemsense._itemsenseConfig;
    this.itemsenseRequest =  request.defaults({
      headers: { 'Authorization': itemsense.authorizationHeader },
      baseUrl: this._itemsenseConfig.itemsenseUrl,
      json: true
    });
  }

  makeRequest(itemsenseModel, requestType, body, id, queryParams) {
    let options = {};
    options.url = itemsenseModel.getRequestUrl(requestType, id, queryParams);
    options.method = requestType.method;
    if(body) {
      options.body = body;
    }
    return this.itemsenseRequest(options);
  }

}

