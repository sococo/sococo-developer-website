Sending a message
---

To send a chat message, publish a JSON formatted message on the `/service/stream` channel with the following format.

```
{
  "messageType": "Message",
  "contentData": "[your chat message goes here]",
  "senderType": "API"
}
```

An example of this interaction can be found in our Hubot adapter [here](https://github.com/sococo/hubot-sococo/blob/master/source/sococo.coffee#L25-L32).

Because the streaming connection is established per room, you chat message will be sent to all users in that room at the time the chat is received by our API server. These chats are accessible in history to those users present the same way normal chats are.