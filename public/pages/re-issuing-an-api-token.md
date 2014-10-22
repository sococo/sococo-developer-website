Re-issuing an API token
---

To re-issue or delete API token, navigate over to the Administrative Console for your account (https://www.sococo.com/console#user). This is the same place you issued your API token in the first place. 

In “Developer” section, you can either click “Delete” or “Re-issue Token.” Both will revoke the previous API token, and all scripts using it will immediately lose access to the Sococo API. In the case of deleting a token, no new token will be issued and the console should show “No tokens issued.” This should guarantee no more API access under this account.

In the case of re-issuing a token, old tokens will stop working and only the new token will be valid. Please note, on either delete or re-issue, there is a confirmation dialogue because this is a potentially destructive activity. You should make sure any integrations which are based on the use of the token being replaced are either turned off or upgraded.

### Sococo Admin Website
![Alt text](/images/re-issuing-api-token-marked.png "Re-issuing an API token")