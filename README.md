# sococo-developer-site

Documentation site describing how to interact with public Sococo APIs.

### Prerequisites

Make sure you have node, npm, and grunt installed.  `npm install` in this directory.

### Development

Configured from `harp-develop.json` in this path. Run `grunt` to start the documentation site server for authoring.  The output will tell you on which port the server is running.

### Static Site Generation

Configured from `harp-release.json` in this path. Run `grunt teamcity` to produce a static site in the `www` folder.  Upload the contents of the static site to your location of choice.

