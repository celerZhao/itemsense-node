# ItemSense Node Library Changelog

## 1.0.9
Fixes token behavior.
- All authentication methods should now work (`getToken`, `validateToken`, `getAllTokens`, `revokeToken`, `revokeAllTokens`)
- `ItemSense.authentication.getToken()` changed to `ItemSense.authentication.getToken( username )` to allow Admins to create tokens for other users.
- Authentication resource in README corrected from `itemsense.authorization` to `itemsense.authentication`. This did not actually change any code.
