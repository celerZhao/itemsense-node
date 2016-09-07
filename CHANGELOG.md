# ItemSense Node Library Changelog

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
