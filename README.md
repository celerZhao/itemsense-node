# itemsense-node
> A simple Node.js API-wrapper library for Impinj's ItemSense. <br></div>
For more information about ItemSense, check out http://developer.impinj.com.

## Install

```bash
$ yarn add itemsense-node
```

Note: We recommend [Yarn](https://yarnpkg.com/en/) as the dependency manager for javascript projects. You are free to use NPM or Yarn interchangeably, but using Yarn protects against version drift of a project's dependencies, which NPM struggles with. 

## Usage

  Each itemsense-node API request returns a promise that will resolve when the operation has been completed. For more information about promises, check out the npm package [request-promise](https://www.npmjs.com/package/request-promise).



### Basic Usage

```javascript
var ItemSense = require('itemsense-node');	 // Require itemsense-node package to get started

var itemsenseConfig = {};  // Create itemsense config json object, or read one in
itemsenseConfig.username = 'admin';
itemsenseConfig.password = 'admindefault';
itemsenseConfig.itemsenseUrl = 'http://192.168.0.113/itemsense';

var itemsense = new ItemSense(itemsenseConfig); // Instantiate new ItemSense instance

// Run a sample request
itemsense.items.get().then(function(response) {
  console.log(response);
});
```

### Table of Contents
1. <a href="#itemsenseConfig">ItemSense Configuration</a>
1. <a href="authToken">Authorization Tokens</a>
1. <a href="#users">Users</a>
1. <a href="#facilities">Facilities</a>
1. <a href="#zoneMaps">Zone Maps </a>
1. <a href= "#currentZoneMap">Current Zone Map </a>
1. <a href= "#readerDefinitions">Reader Definitions </a>
1. <a href ="#readerConfigurations">Reader Configurations </a>
1. <a href= "#Thresholds">Thresholds </a>
1. <a href= "#AntennaConfiugrations">Threshold Antenna Configuration  </a>
1. <a href ="#recipes">Recipes</a>
1. <a href= "#jobs">Jobs</a>
1. <a href= "#messageQueue">Message Queue </a>
1. <a href= "#items">Items </a>
1. <a href= "#health">Health </a>
1. <a href= "#updates">Software Updates </a>
1. <a href= "#settings">Settings </a>
1. <a href= "#support">Support </a>
1. <a href= "#consumingQueues">Consuming Message Queues </a>


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

For information about token authentication, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC15

```js
itemsense.authentication.getToken(username) // creates a token for given user

itemsense.authentication.validateToken(id) // validates a specific token id

itemsense.authentication.getAllTokens(username) // retrieves all tokens available for a specific user

itemsense.authentication.revokeToken(token) // revokes a token

itemsense.authentication.revokeAllTokens(username) // revokes all tokens available for a specific user
```

### Users

<div id="users"></div>

For information about users, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC6

```javascript

itemsense.users.get(username) // returns a user object based on username

itemsense.users.getAll() // returns all of the users for an itemsense instance

itemsense.users.create(user) // creates a user

itemsense.users.update(user) // updates a user

```
### Facilities

<div id="facilities"></div>

For information about facilities, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC23

```javascript
itemsense.facilities.get(facilityName) // returns a facility object based on the name

itemsense.facilities.getAll() // returns all of the facilities for an itemsense instance

itemsense.facilities.create(facilityName) // Create a new facility (but do not replace an existing one)

itemsense.facilities.createOrReplace(facilityName) // Replace an existing facility in the store, or creates a new one

itemsense.facilities.update(facilityName) // Aliases .createOrReplace()
```


### Zone Maps

<div id="zoneMaps"></div>

For information about zone maps, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC29

```javascript
itemsense.zoneMaps.get(zoneMapName) // returns a zone map object based on the name

itemsense.zoneMaps.getAll() // returns all of the zone maps for an itemsense instance

itemsense.zoneMaps.create(zoneMap) // creates a zone map

itemsense.zoneMaps.update(zoneMap) // updates a zone map
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

For information reader definitions, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC39

```javascript
itemsense.readerDefinitions.get(readerDefinitionName) // returns a reader definition object based on the name

itemsense.readerDefinitions.getAll() // returns all of the reader definitions for an itemsense instance

itemsense.readerDefinitions.create(readerDefinition) // creates a reader definition

itemsense.readerDefinitions.update(readerDefinition) // updates a reader definition

itemsense.readerDefinitions.delete(readerDefinitionName) // deletes a reader definition based on the name

itemsense.readerDefinitions.groups() // returns an array of all configurationed group names

itemsense.readerDefinitions.getAllFeatures(readerName) //Get the status of all the features of a reader

itemsense.readerDefinitions.setFeature(readerName) //Set the status of a single feature of reader

itemsense.readerDefinitions.getFeature(readerName, featureName) //Get the status of a single feature of reader
```

### Reader Configurations

<div id="readerConfigurations"></div>

For information about reader configurations, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC51

```javascript
itemsense.readerConfigurations.get(readerConfigurationName) // returns a reader configuration object based on the name

itemsense.readerConfigurations.getAll() // returns all of the reader configurations for an itemsense instance

itemsense.readerConfigurations.create(readerConfiguration) // creates a reader configuration

itemsense.readerConfigurations.update(readerConfiguration) // updates a reader configuration

itemsense.readerConfigurations.delete(readerConfigurationName) // deletes a reader configuration based on the name
```

### Thresholds

For more information on Thresholds, visit
https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC58

```javascript
// Get an array of all the threshold configuration objects
// embed - (optional) An object to specify which JSON objects should be embedded
//         in the threshold response object. Currently, only
//         'antennaConfiguration'.
//         Example: { embed: ['antennaConfiguration'] }
itemsense.thresholds.getAll(embed)

// Get a single threshold configuration object
// embed - (optional) Same as for getAll method above.
itemsense.thresholds.get(thresholdId, embed)

// Create a threshold
itemsense.thresholds.create(thresholdConfigObject)

// Update an existing thresold
itemsense.thresholds.update(thresholdId, thresholdConfigObject)

// Remove a threshold
itemsense.thresholds.delete(thresholdId)
```

### Threshold Antenna Configurations
For more information on Threshold Antenna Configurations, visit
https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC64

```javascript
//Get all the configured Threshold Antenna Configurations
itemsense.antennaConfigurations.getAll()

//Get a single configured Threshold Antenna Configuration
itemsense.antennaConfigurations.get(antennaConfigurtionId)

//Create a new Threshold Antenna Configuration
itemsense.antennaConfigurations.create(antennaConfObject)

//Update an existing Threshold Antenna Configuration
itemsense.antennaConfigurations.update(antennaConfigurationId, antennaConfOjbject)

//Delete an exiting configured Threshold Antenna Configuration
itemsense.antennaConfigurations.delete(antennaConfigurationId)
```

### Recipes

<div id="recipes"></div>

For information about recipes, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC70

```javascript
itemsense.recipes.get(recipeName) // returns a recipe object based on the name

itemsense.recipes.getAll() // returns all of the recipes for an itemsense instance

itemsense.recipes.create(recipe) // creates a recipe

itemsense.recipes.update(recipe) // updates a recipe

itemsense.recipes.delete(recipeName) // deletes a recipe based on the name
```


### Jobs

<div id="jobs"></div>

For information about jobs, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC76

```javascript
itemsense.jobs.get(jobId) // returns a job object based on the id

itemsense.jobs.getAll() // returns all of the jobs for an itemsense instance

itemsense.jobs.start(job) // starts a job

itemsense.jobs.stop(jobId) // stops a job based on the id

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

For information about items, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC81

```javascript
itemsense.items.get(queryParams) // Retrieves items from ItemSense, takes in an option query params object

itemsense.items.getHistory(queryParams) // Retrieves item history records from ItemSense, takes in an optional query params object

itemsense.items.configureQueue(filter, options) // Configure a queue to receive item event messages with the given filter and options
```

### Transitions

<div id="transitions"></div>

For information about transitions, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC84

```javascript
itemsense.transitions.get(queryParams) // Retrieves transition events from ItemSense, takes in an optional query params object

itemsense.transitions.configureQueue(filter, options) // Configure a queue to receive transition event messages which match the given filter and options
```

### Health

<div id="health"></div>

For information about Reader Health, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC88

```javascript
itemsense.health.events(queryParams) // Retrieves health events from ItemSense, accepts an optional query object

itemsense.health.configureQueue(filter, options) // Configure a queue to receive health event messages with the given filter and options

itemsense.health.readers() // Get status for all current readers

itemsense.health.reader(readerId) // Get status for a given reader. Accepts string readerID.
```

### Software updates

<div id="updates"></div>

For information about Software Update Functionality, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC98

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

For information about SNMP Settings, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC103

```javascript
itemsense.settings.get() // Returns the current SNMP settings

itemsense.settings.configure(settingsObject) // Updates SNMP settings based on a configuration object

itemsense.settings.disable() // Disables SNMP and deletes any configuration
```

### Support
For information about the Support endpoints, visit https://platform.impinj.com/site/developer/itemsense/apidocs/index.gsp#TOC108

#### Configuration
Get all the configuration elements within an ItemSense instance in tar.gz format.
```javascript
// Get all of ItemSense's configuration as a tar.gz file
itemsense.configuration.getAll(writeLocation);
```
The `writeLocation` parameter is an optional string which when specified, provides a path (and file name) to which the configuration tar.gz file should be written. Once written a resolved promise is returned containing a success message. If there is an error when writing to the specified location, a rejected promise is returned containing a description of the error.

If `writeLocation` isn't specified the raw binary tar.gz blog of data is returned in a resolved Promised which the caller must handle.

#### Logs
Get the logs of ItemSense in tar.gz format.

```javascript
itemsense.logs.get(queryParamsObject, writeLocation);
```

A javascript object may be passed containing the keys `from`, `to` and `extended`. A description of what these keys do can be found in the API document linked above.

For a description of the `writeLocation` parameter, see the [Configuration](#configuration) section above.

### Consuming Message Queues

<div id="consumingQueues"></div>

For resources that expose message queues (`health`, `transitions` and `items`), we provide a `configureAndSubscribe` helper to facilitate consuming new messages. Call it just like you would the `configureQueue` method. It returns a promise that resolves to an event emitter.

This object will emit `data` events as new messages are sent on the queue, or `error` events if there are issues with the connection:

```javascript
itemsense.items.configureAndSubscribe(filter, options).then(queue => {
  queue.on('data', data => console.log("A js object: ", data) );
  queue.on('error', err => console.log(err) );
  // The messages contents are provided as a pre-parsed json object.
});
```
The queue object will also emit `status` events as it proceeds with configuring and connecting to the AMQP service. You can use these to help debug or track the progress of the connection:

```javascript
itemsense.health.configureAndSubscribe(filter, options).then(queue => {
  queue.on('status', msg => console.log(msg) );
  // This will broadcast:
  // 'connection': a connection has successfully been established to the AMQP server
  // 'queue': a queue has successfully been opened
  // 'listening': a subscription to the queue has successfully been established, we are now listening for data
});
```

Alternatively, the queue object will also emit "connection lifecycle" events as it proceeds with configuring and connecting to the AMQP service:

```javascript
itemsense.health.configureAndSubscribe(filter, options).then(queue => {
  queue.on('connectionEstablished', connectionObject => console.log('Connected!') );
  queue.on('queueEstablished', amqpQueueObject => console.log('Queue Established!') );
  queue.on('listening', () => console.log('Listening for Data!') );
});
```

Note that:
* On `connectionEstablished`, the event handler is passed the [AMQP Connection](https://www.npmjs.com/package/amqp#connection) object.
* On `queueEstablished`, the event handler is passed the raw [AMQP Queue](https://www.npmjs.com/package/amqp#queue) object.
* On `listening`, nothing is passed to the event handler.
