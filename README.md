# itemsense-node
> A simple Node.js API-wrapper library for Impinj's ItemSense. <br/>
For more information about ItemSense, check out http://developer.impinj.com.

## Install
```bash
$ npm i itemsense-node --save
```

## Usage

### Table of Contents
1. [ItemSense Configuration] (#itemsenseConfig)

```javascript
var ItemSense = require('itemsense-node');	

var itemsenseConfig = {};
itemsenseConfig.username = 'admin';
itemsenseConfig.password = 'admindefault';
itemsenseConfig.itemsenseUrl = 'http://192.168.0.113/itemsense';

var itemsense = new ItemSense(itemsenseConfig);

itemsense.items.get().then(function(response){
  console.log(response);
});
```

### ItemSense Configuration 
<div id="itemsenseConfig" />
<table>
<thead>
<tr>
<td>
<b>Property</b>
</td>
<td>
<b>Description</b>
</td>
</tr>
</thead>
<tbody>
<tr>
  <td>
  itemsenseUrl
  </td>
  <td>
  The base URL for your itemsense instance. e.g. http://office.impinj.com/itemsense
  </td>
</tr>
<tr>
  <td>
  authToken
  </td>
  <td>
  The authorization token for your itemsense instance. Users have the option of either providing an auth token or username and password for itemsense credentials
  </td>
</tr>
<tr>
  <td>
  username
  </td>
  <td>
  The username for your itemsense credentials. This will be used to encode your requests with a basic auth header. This is optional if you are instead providing an authToken.
  </td>
</tr>
<tr>
  <td>
  password
</td>
  <td>
  The password for your itemsense credentials. This will be used to encode your requests with a basic auth header. This is optional if you are instead providing an authToken.
  </td>
</tr>
</tbody>

</table>

### Authorization Tokens
For information about token authentication, visit http://developer.impinj.com/itemsense/docs/api/#authentication

```javascript
itemsense.authorization.getToken() //creates a token based on basic auth credentials

itemsense.authorization.validateToken(id) //validates a specific token id

itemsense.authorization.getAllTokens(username) // retrieves all tokens available for a specific user

itemsense.authorization.revokeToken(token) // revokes a token 

itemsense.authorization.revokeAllTokens(username) // revokes all tokens available for a specific user


```

### Users
For information about users, visit http://developer.impinj.com/itemsense/docs/api/#users
```javascript
itemsense.users.get(username) // returns a user object based on username

itemsense.users.getAll() // returns all of the users for an itemsense instance

itemsense.users.create(user) // creates a user

itemsense.users.update(user) //updates a user

```
### Facilities
For information about facilities, visit http://developer.impinj.com/itemsense/docs/api/#facilities
```javascript
itemsense.facilities.get(facilityName) // returns a facility object based on the name

itemsense.facilities.getAll() // returns all of the facilities for an itemsense instance

itemsense.facilities.create(facility) // creates a facility

itemsense.facilities.update(facility) //updates a faciity
```

