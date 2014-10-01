Hubot adapter
---

We’ve open sourced our Hubot adapter, which you can find here: https://github.com/sococo/hubot-sococo

Its also published to npm (node package manager) under `hubot-sococo`. You can install the Sococo Hubot adapter by running `npm install --save hubot-sococo` inside your hubot (created with a --create as necessary). Check out the hubot specific instructions here: https://github.com/github/hubot/blob/master/docs/deploying/heroku.md

Environment variables for use with Sococo’s Hubot adapter:

<table class="table table-bordered">
	<thead>
		<tr>
			<th>
				Environment Variable
			</th>
			<th>
				What is this?
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				HUBOT_SOCOCO_SERVER
			</td>
			<td>
				This should always be https://as-vip.sococo.net
			</td>
		</tr>
		<tr>
			<td>
				HUBOT_SOCOCO_ROOMCODE
			</td>
			<td>
				This code represents the room you’d like to authenticate into. You can find this code by right clicking on any room in Sococo and clicking “Copy Room Link” or clicking on “Edit Room”<br /><br />

				Example Copied Link: <br />
				https://www.sococo.com/web/join/1a6b6dce4sw07a2c42d1fuuo7<br /><br />

				Example Room Code from Link:<br />
				1a6b6dce4sw07a2c42d1fuuo7
			</td>
		</tr>
		<tr>
			<td>
				HUBOT_SOCOCO_TOKEN
			</td>
			<td>
				This is your API token. See the section [“Generating an API Token”](/pages/generating-an-api-token.html)
			</td>
		</tr>
	</tbody>
</table>