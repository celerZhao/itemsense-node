# ItemSense Node Library Changelog

## 1.4.1
- Repaired `messageQueue.configure()` functionality

## 1.4.0
- Added SNMP settings functionality

## 1.3.1
- Fixed issue where message queue subscriptions would fail silently. Now, if there is an external issue connecting to the queue, an error is raised with details.

## 1.3.0a
- Repaired `items` resource endpoints

## 1.3.0
- Added `configureAndSubscribe` functionality to message queue-handling endpoints.
- `.messageQueue` is depracated:
  - Moved `messageQueue.configure()` to `items.configureQueue()`

## 1.2.0
Adds Firmware Update behaviour.
- Fixes for some Authentication endpoints
- Fix endpoint used by ItemHistory methods

## 1.1.0
Adds reader health behaviour.
- All health endpoints added: (`events`, `configureQueue`, `readers`, and `reader`)

## 1.0.9a
Now accepts `authToken` upon instantiation, as documented.

## 1.0.9
Fixes token behavior.
- All authentication methods should now work (`getToken`, `validateToken`, `getAllTokens`, `revokeToken`, `revokeAllTokens`)
- `ItemSense.authentication.getToken()` changed to `ItemSense.authentication.getToken(username)` to allow Admins to create tokens for other users.
- Authentication resource in README corrected from `itemsense.authorization` to `itemsense.authentication`. This did not actually change any code.
