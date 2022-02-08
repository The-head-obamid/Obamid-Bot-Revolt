Obamid Bot
---
**BOT CURRENTLY IN DEVELOPMENT**

Bot designated for specialized interactions within the obamids revolt server

---

If needed for personal purposes, the bot can be tweaked to your liking.
To authenticate, create a config.js file and in it, paste the following:

```js
export var token = "INPUT TOKEN HERE"
export var prefix = "INPUT PREFIX HERE"
```

Modify the above fields to contain the bot token and the specified prefix, if necessary.
The above fields will be imported by the index.js file and (in the future, both will be) used by the bot

Then, you'll need to install needed npm modules:
```sh
npm i better-revolt-js
```

And then you can run the bot like this
```
node --experimental-specifier-resolution=node index.js
```
