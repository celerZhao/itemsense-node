import request from 'request-promise';
import http from 'http';
import URL from 'url';

function bufferConcat(list, length) {
  let bufLength = length;
  if (!Array.isArray(list)) {
    throw new Error('Usage: bufferConcat(list, [length])');
  }
  if (list.length === 0) return new Buffer(0);
  if (list.length === 1) return list[0];

  if (typeof length !== 'number') bufLength = list.reduce((acc, ele) => acc + ele.length, 0);

  const buffer = new Buffer(bufLength);

  list.reduce((pos, chunk) => {
    chunk.copy(buffer, pos);
    return pos + chunk.length;
  }, 0);
  return buffer;
}

export class ItemsenseApiService {

  constructor(itemsense) {
    this._itemsenseConfig = itemsense._itemsenseConfig;
    this.itemsense = itemsense;
    this.itemsenseRequest = request.defaults({
      headers: { Authorization: itemsense.authorizationHeader },
      baseUrl: this._itemsenseConfig.itemsenseUrl,
      json: true,
    });
  }

  makeRequest(itemsenseModel, requestType, body, id, queryParams) {
    const options = {};
    options.url = itemsenseModel.getRequestUrl(requestType, id, queryParams);
    options.method = requestType.method;
    if (body) {
      options.body = body;
    }
    return this.itemsenseRequest(options);
  }

  // This function can handle sending a request for binary data whereas
  // the function above can only handle string data.
  makeNativeRequest(itemsenseModel, requestType, body, id, queryParams, binary) {
    const parsedURL = URL.parse(this._itemsenseConfig.itemsenseUrl);
    let bodyLength;
    if (body) bodyLength = Buffer.byteLength(JSON.stringify(body));
    return new Promise((resolve, reject) => {
      const nativeRequest = http.request({
        host: parsedURL.hostname,
        port: parsedURL.port || '80',
        method: requestType.method,
        path: `${parsedURL.pathname}${itemsenseModel.getRequestUrl(requestType, id, queryParams)}`,
        headers: {
          Authorization: this.itemsense.authorizationHeader,
          'Content-Length': bodyLength || 0,
          'Content-Type': 'application/json',
        },
      }, (res) => {
        const responseBufferChunks = [];
        res.on('data', (chunk) => {
          responseBufferChunks.push(chunk);
        });
        res.on('end', () => {
          const responseData = bufferConcat(responseBufferChunks);
          if (!binary) {
            resolve(JSON.parse(responseData));
          } else {
            resolve(responseData);
          }
        });
      });
      nativeRequest.on('error', e => reject(e));
      if (body) nativeRequest.write(JSON.stringify(body));
      nativeRequest.end();
    });
  }
}

