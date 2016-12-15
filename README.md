# itemsense-node
> A simple Node.js API-wrapper library for Impinj's ItemSense. <br></div>
For more information about ItemSense, check out http://developer.impinj.com.

## Install

```bash
$ npm i itemsense-node --save
```

## Usage

  Each itemsense-node API request returns a promise that will resolve when the operation has been completed. For more information about promises, check out the npm package [request-promise](https://www.npmjs.com/package/request-promise).



### Basic Usage

```javascript
var ItemSense = require('itemsense-node');	 //Require itemsense-node package to get started

var itemsenseConfig = {};  //Create itemsense config json object, or read one in
itemsenseConfig.username = 'admin';
itemsenseConfig.password = 'admindefault';
itemsenseConfig.itemsenseUrl = 'http://192.168.0.113/itemsense';

var itemsense = new ItemSense(itemsenseConfig); //Instantiate new ItemSense instance

//Run a sample request
itemsense.items.get().then(function(response) {
  console.log(response);
});
```

### Table of Contents
1. <a href="#itemsenseConfig">ItemSense Configuration</a>
2. <a href="authToken">Authorization Tokens</a>
3. <a href="#users">Users</a>
4. <a href="#zoneMaps">Zone Maps </a>
5. <a href= "#currentZoneMap">Current Zone Map </a>
6. <a href= "#readerDefinitions">Reader Definitions </a>
7. <a href ="#readerConfigurations">Reader Configurations </a>
7. <a href ="#recipes">Recipes</a>
8. <a href= "#jobs">Jobs</a>
9. <a href= "#messageQueue">Message Queue </a>
10. <a href= "#items">Items </a>
11. <a href= "#health">Health </a>
12. <a href= "#updates">Software Updates </a>
13. <a href= "#settings">Settings </a>
14. <a href= "#consumingQueues">Consuming Message Queues </a>



### ItemSense Configuration

<div id="itemsenseConfig"></div>
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

<div id="authToken"></div>

For information about token authentication, visit http://developer.impinj.com/itemsense/docs/api/#authentication

```js
itemsense.authentication.getToken(username) //creates a token for given user

itemsense.authentication.validateToken(id) //validates a specific token id

itemsense.authentication.getAllTokens(username) // retrieves all tokens available for a specific user

itemsense.authentication.revokeToken(token) // revokes a token

itemsense.authentication.revokeAllTokens(username) // revokes all tokens available for a specific user
```

### Users

<div id="users"></div>

For information about users, visit http://developer.impinj.com/itemsense/docs/api/#users

```javascript

itemsense.users.get(username) // returns a user object based on username

itemsense.users.getAll() // returns all of the users for an itemsense instance

itemsense.users.create(user) // creates a user

itemsense.users.update(user) //updates a user

```
### Facilities

<div id="facilities"></div>

For information about facilities, visit http://developer.impinj.com/itemsense/docs/api/#facilities

```javascript
itemsense.facilities.get(facilityName) // returns a facility object based on the name

itemsense.facilities.getAll() // returns all of the facilities for an itemsense instance

itemsense.facilities.create(facility) // Create a new facility (but do not replace an existing one)

itemsense.facilities.createOrReplace(facility) // Replace an existing facility in the store, or creates a new one

itemsense.facilities.update(facility) // Aliases .createOrReplace()
```


### Zone Maps

<div id="zoneMaps"></div>

For information about zone maps, visit http://developer.impinj.com/itemsense/docs/api/#zone-maps

```javascript
itemsense.zoneMaps.get(zoneMapName) // returns a zone map object based on the name

itemsense.zoneMaps.getAll() // returns all of the zone maps for an itemsense instance

itemsense.zoneMaps.create(zoneMap) // creates a zone map

itemsense.zoneMaps.update(zoneMap) //updates a zone map
```

### Current Zone Map

<div id="currentZoneMap"></div>

```javascript
itemsense.currentZoneMap.get(facilityName) // returns the current zonemap for a specific facility

itemsense.currentZoneMap.update(zoneMapName) // updates/sets the current zone map

itemsense.zoneMaps.clear(facilityName) // clears the current zone map value
```

### Reader Definitions

<div id="readerDefintions"></div>

For information reader definitions, visit http://developer.impinj.com/itemsense/docs/api/#reader-definitions

```javascript
itemsense.readerDefinitions.get(readerDefinitionName) // returns a reader definition object based on the name

itemsense.readerDefinitions.getAll() // returns all of the reader definitions for an itemsense instance

itemsense.readerDefinitions.create(readerDefinition) // creates a reader definition

itemsense.readerDefinitions.update(readerDefinition) //updates a reader definition

itemsense.readerDefinitions.delete(readerDefinitionName) //deletes a reader definition based on the name
```

### Reader Configurations

<div id="readerConfigurations"></div>

For information about reader configurations, visit http://developer.impinj.com/itemsense/docs/api/#reader-configurations

```javascript
itemsense.readerConfigurations.get(readerConfigurationName) // returns a reader configuration object based on the name

itemsense.readerConfigurations.getAll() // returns all of the reader configurations for an itemsense instance

itemsense.readerConfigurations.create(readerConfiguration) // creates a reader configuration

itemsense.readerConfigurations.update(readerConfiguration) //updates a reader configuration

itemsense.readerConfigurations.delete(readerConfigurationName) //deletes a reader configuration based on the name
```

### Recipes

<div id="recipes"></div>

For information about recipes, visit http://developer.impinj.com/itemsense/docs/api/#recipes

```javascript
itemsense.recipes.get(recipeName) // returns a recipe object based on the name

itemsense.recipes.getAll() // returns all of the recipes for an itemsense instance

itemsense.recipes.create(recipe) // creates a recipe

itemsense.recipes.update(recipe) //updates a recipe

itemsense.recipes.delete(recipeName) //deletes a recipe based on the name
```


### Jobs

<div id="jobs"></div>

For information about jobs, visit http://developer.impinj.com/itemsense/docs/api/#jobs

```javascript
itemsense.jobs.get(jobId) // returns a job object based on the id

itemsense.jobs.getAll() // returns all of the jobs for an itemsense instance

itemsense.jobs.start(job) // starts a job

itemsense.jobs.stop(jobId) //stops a job based on the id

itemsense.jobs.stats(jobId) // retrieves the job stats for a specific job

```

### Message Queue

<div id="messageQueue"></div>

_Deprecated: This functionality was moved to <a href= "#items">Items</a>._
For information about message queues, visit http://developer.impinj.com/itemsense/docs/api/#message-queues

```javascript
itemsense.messageQueue.configure(messageQueue) // configures the message queue

```

### Items

<div id="items"></div>

For information about items, visit http://developer.impinj.com/itemsense/docs/api/#items

```javascript
itemsense.items.get(queryParams) // Retrieves items from ItemSense, takes in an option query param object

itemsense.items.getHistory(queryParams) // Retrieves item history records from ItemSense, takes in an optional query param object

itemsense.items.configureQueue(queueConfig) // Configure a queue to receive item event messages with the given filter
```

### Health

<div id="health"></div>

For information about Reader Health, visit http://developer.impinj.com/itemsense/docs/api/#health

```javascript
itemsense.health.events(queryParams) // Retrieves health events from ItemSense, accepts an optional query object

itemsense.health.configureQueue(queueObject) // Configure a queue to receive health event messages with the given filter

itemsense.health.readers() // Get status for all current readers

itemsense.health.reader(readerId) // Get status for a given reader. Accepts string readerID.
```

### Software updates

<div id="updates"></div>

For information about Software Update Functionality, visit http://developer.impinj.com/itemsense/docs/api/#updates

```javascript
itemsense.softwareImages.get(imageType, imageName) // Download a software image


itemsense.softwareUpgrades.getAll() // Returns the ids for all the upgrade jobs

itemsense.softwareUpgrades.get(upgradeInstanceId) // Returns the status of a specific upgrade job

itemsense.softwareUpgrades.start(upgradeData) // Adds and schedules a new upgrade task

itemsense.softwareUpgrades.stop(upgradeInstanceId) // Cancels a specific upgrade job

itemsense.softwareUpgrades.trigger(upgradeData) // Injects a dummy upgrade task for a reader


itemsense.softwareVersions.createOrReplace(readerSoftwareVersionData ) // Update a software version metadata record (no policy enforcement)

itemsense.softwareVersions.destroy(imageType, softwareVersionId) // Remove a specific VersionInfo by ImageType and VersionId

itemsense.softwareVersions.list(imageType) // Show all versions of an ImageType by VersionPolicy

itemsense.softwareVersions.get(imageType, softwareVersionId) // Show a specific VersionIno by ImageType and VersionId

itemsense.softwareVersions.update(versionPolicyObj) // Update the version policy for a reader software version
```

### Settings - SNMP

<div id="settings"></div>

For information about SNMP Settings, visit http://developer.impinj.com/itemsense/docs/api/#settings-snmp

```javascript
itemsense.settings.get() // Returns the current SNMP settings

itemsense.settings.configure(settingsObject) // Updates SNMP settings based on a configuration object

itemsense.settings.disable() // Disables SNMP and deletes any configuration
```


### Consuming Message Queues

<div id="consumingQueues"></div>

For resources that expose message queues (`health` and `items`), we provide a `configureAndSubscribe` helper to facilitate consuming new messages. Call it just like you would the `configureQueue` method. It returns a promise that resolves to an event emitter.

This object will emit `data` events as new messages are sent on the queue:

```javascript
is.items.configureAndSubscribe(queueConfig).then(queue => {
  queue.on('data', data => console.log("A js object: ", data) );
  //The messages contents are provided as a pre-parsed json object.
});
```

The queue object will also emit `status` events as it proceeds with configuring and connecting to the AMQP service. You can use these to help debug or track the progress of the connection:

```javascript
is.health.configureAndSubscribe(queueConfig).then(queue => {
  queue.on('status', msg => console.log(msg) );
  //This will broadcast:
  // 'connection': a connection has successfully been established to the AMQP server
  // 'queue': a queue has successfully been opened
  // 'listening': a subscription to the queue has successfully been established, we are now listening for data
});
```
