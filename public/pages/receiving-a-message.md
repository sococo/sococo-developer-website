Receiving a message
---

Incoming chat messages will be received on the `/service/stream` channel if you’re subscribed. The chat messages are formatted as JSON objects with the following format. Note that the senderType is 'Human,' whereas messages sent by the API must be of type 'API.'

```
{
  "messageType": "Message",
  "contentData": "[incoming chat message here]",
  "senderType": "Human"
}
```
  
An example of this interaction can be found in our Hubot adapter [here](https://github.com/sococo/hubot-sococo/blob/master/source/sococo.coffee#L126-L149).

You will receive messages as long as you are connected and subscribed to the `/service/stream` channel. Note that the API client will show up as a 'robot' avatar in the room you are authenticated into. In this way, we allow the API client's presence to be transparent to the users who are present in the room.