FAQ
---
  
**Q.** Getting a 404 status code during `/login`  
**A.** Be sure to use `https://`  Also, to ensure you are using the correct URL, you can attempt a GET request on /test  
    
**Q.** Getting a 405 status code during `/login`  
**A.** Be sure to POST to the endpoint (instead of GET or PUT) during authentication  
    
**Q.** Getting a 400 status code during `/login`  
**A.** POST body must be JSON, and required fields include the `room` and `token`  
    
**Q.** Getting a 401 status code during `/login`  
**A.** Several items to check - response will include a `message` field with the details
  
* Is the room code still valid?  Right click in your thick client in the room you are attempting to join with your bot and verify this room code matches yours.  This code only expires if you or an administrator of your space expires room codes.  
* Is the API token still valid?  Login to the console using the bot's account and verify the API token matches yours.  This only expires if someone with access to this account expires the API token.  
    
**Q.** Getting a 412 status code during `/bayeux`  
**A.** One or both of the required cookies are missing from your HTTP headers.  
    
**Q.** Getting a 400 status code during `/bayeux`  
**A.** You may be sending the cookies back altered or in a non-RFC-compliant format.  The cookie values returned from /login must not be altered and must be sent back in compliance with RFC 6265.  
  	
For example, in the response from `/login` you will receive set-cookie headers similar to the following:  

`Set-Cookie: API-Cookie=!fdLbEYZzxb+QuB1sJWKU4R1agn+aZHgdHvrO5r8mJZhiyzavktk6v6plHlX/w09CTIxaVpXdDKz5I11K2nMfwwV6R0EO7T5BEeKCsjtHdaAQdj9X1ggLFbEOaI  
Y/Nl8GU8Amvu3pyhrpvkVSciKhcVaHoEbBlZ3rWpf7NAdlohuMb6RQdRdeiVr1t0YQwM4cWWw8XNr+YguGkCReVuXnaJM+xx1vx6iikfVnlYKgdIcvUrjj0eZwjRr8c61xTJr2cpvIDZrNvtrGh  
EkbjkgEK08O/dunyJK/X8Ug==; Version=1  
Set-Cookie: API-Route=!w0fZLIbep/i6GB1sJWKU4R1agn+XdspD1Dw3sI1CCmVt7VioPyWOevFjeEDFYIeRk+oCw=; Version=1`  
  
Your subsequent request to `/bayeux` should contain the following cookie header:  
`Cookie: API-Cookie=!fdLbEYZzxb+QuB1sJWKU4R1agn+aZHgdHvrO5r8mJZhiyzavktk6v6plHlX/w09CTIxaVpXdDKz5I11K2nMfwwV6R0EO7T5BEeKCsjtHdaAQdj9X1ggLFbEOaIY/Nl8  
GU8Amvu3pyhrpvkVSciKhcVaHoEbBlZ3rWpf7NAdlohuMb6RQdRdeiVr1t0YQwM4cWWw8XNr+YguGkCReVuXnaJM+xx1vx6iikfVnlYKgdIcvUrjj0eZwjRr8c61xTJr2cpvIDZrNvtrGhEkbjkg  
EK08O/dunyJK/X8Ug==; API-Route=!w0fZLIbep/i6GB1sJWKU4R1agn+XdspD1Dw3sI1CCmVt7VioPyWOevFjeEDFYIeRk+oCw=`
  
​You must not return cookie attributes such as 'Expires', 'Version' etc. and you must not perform any encoding or escaping of the cookie value.    
    	
**Q.** Getting a 503 status code    
**A.** A couple possibilities
      
* This usually means your space is not running yet.  Use a Mac or Windows client to start up your space, then login your bot.  The bot can then remain logged in.    
* The server may be temporarily busy.  Desktop and mobile clients get priority over API clients.  Try again in 5 minutes.    
    
**Q.**  Getting 403 when publishing a message on `/bayeux`  
**A.**  This indicates that your login was expired by our API server, possibly due to a network disconnection of your client. When a network disconnection occurs, many of the bayeux client libraries available will automatically attempt to restore the bayeux stream when it becomes available.  If the disconnection is longer than a few seconds your login will be expired and you must re-authenticate.       
       
**Q.** What should I include when reporting a problem?    
**A.** If possible, problems reported with the streaming API should include all the following:
    
* Request URL (`/api/v1/login` or `/api/v1/bayeux`) and HTTP cookies received and/or sent.  
* HTTP response code.  
* HTTP response body.  
* Your external IP address as visible to our servers, obtained via http://www.sococo.com/checkip (request this from the machine that is running your API client code)  
