A  basic API wrapper for Hypixel, with typescript bindings - Up to date with the resources endpoint. Feel free to submit a PR.

`npm i hypixelmultikeyapi`

## Usage

```
const { HypixelAPI } = require("./index.js");
const APIWrapper = new HypixelAPI("key1", "key2", "key3"); // This takes as many keys you want as arguments

(async () => {
    await APIWrapper.key() // Key Info
    await APIWrapper.player("testuuid") // Player Info
})();
```

