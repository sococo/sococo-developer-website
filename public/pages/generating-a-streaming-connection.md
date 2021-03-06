Generating a streaming connection
---

We use Bayeux (a protocol for bidirectional communication over HTTP) and for connecting to our servers and sending/receiving messages. 

For easing this task, we use the Faye client libraries, documentation and support for which can be found here: [http://faye.jcoglan.com/](http://faye.jcoglan.com/). It’s a convenient, multi-language client library for pub/sub using Bayeaux.

Our endpoint for connecting to our Bayeux server is `https://as-vip.sococo.net/api/v1/bayeux`

A full example of initiating a connection and supporting sending and receiving chat messages can be found in the source of our Hubot adapter: [https://github.com/sococo/hubot-sococo/blob/master/source/sococo.coffee](https://github.com/sococo/hubot-sococo/blob/master/source/sococo.coffee)

**Steps for establishing a streaming connection**:

* Authenticate against `https://as-vip.sococo.net/api/v1/login`.
* Parse the response for the authentication cookie. The response will contain two cookies, `API-Cookie` and `API-Route`. You will need to include both.
* Create a new Bayeux/Faye client instance with Sococo’s Bayeux stream url (`https://as-vip.sococo.net/api/v1/bayeux`).
* Set the cookie header on the Bayeux/Faye client connection to match the response from the authentication.
* Connect to Sococo’s Bayeux stream url.
* Subscribe to the `/service/stream` channel.

Currently, one channel is used for all communication (`/service/stream`). This may be expanded in the future.