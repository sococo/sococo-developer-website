Authentication
---

### Login
Sent to an area server REST endpoint, never turned into soda.
```json
{
	"token":"TOKEN",
	"location":"GUEST_ACCESS_ZURL"
}
```

### Login response
Response code indicates success/reason for failure.  The encrypted cookie should include routing information for the VIP.  The sessionId is actually a channel ID.  The name was chosen to be clearer for non-Sococo API clients.  The session ID should be removed from this message if we can store it in the HTTP cookie.  Response from a REST endpoint, never turned into soda.
```json
{
	"responseCode":"RESPONSE_CODE",
	"sessionId":"UUID_SESSION_ID"
}
```