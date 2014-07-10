Streaming API JSON Messages
---

An overview of the various JSON messages that make up the streaming API.

---

### Login
Sent to an area server REST endpoint, never turned into soda.
```json
{
	"token":"TOKEN",
	"room":"ROOM_CODE"
}
```

The token is obtained from the Sococo console User Profile area (https://www.sococo.com/console#user).
The room code can be obtained from the copy room link feature in the Sococo Client; it is the final part of the url path, for example: "3697fb45o3u6dybej4cs2ocyl"

### Login response
Response code indicates success/reason for failure.  The encrypted cookie should include routing information for the VIP.  The sessionId is actually a channel ID.  The name was chosen to be clearer for non-Sococo API clients.  The session ID should be removed from this message if we can store it in the HTTP cookie.  Response from a REST endpoint, never turned into soda.
```json
{
	"responseCode":"RESPONSE_CODE",
	"sessionId":"UUID_SESSION_ID"
}
```

### Join
Similar to SodaAreaEnter with a channelID.  May require new SODA, may be translated from SodaAreaEnter
```json
{
	"messageType":"Join",
	"sessionId":"UUID_SESSION_ID"
}
```
The session ID should be removed from this message if we find we can store it in the HTTP cookie.

### Chat message
This should be translated between JSON and a SodaChatMsgV4
```json
{
	"messageType": "SpaceMessage",
	"timestamp": 1399401346503,
	"senderID": "08d28571-efa2-43cd-915c-a06324f0ed95",
	"contentData": "test",
	"eventType": "ScreenShareEvent",
	"senderDisplayName": "joseph Indigo",
	"senderColor": "00588E",
	"senderType": "human",
	"eventProperties": []
}
```

### Exit message
This will require new SODA as the SodaAreaExit does not allow for a reason code
```json
{
	"messageType":"Exit",
	"reason":"EXIT_REASON"
}
```

