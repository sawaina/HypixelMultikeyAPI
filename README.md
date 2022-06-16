A  basic API wrapper for Hypixel, with typescript bindings - Up to date with the resources endpoint. (This does not include Skyblock as of this build.) Feel free to submit a PR.

## Usage

```
const { HypixelAPI } = require("./index.js");
const APIWrapper = new HypixelAPI("key1", "key2", "key3"); // This takes as many keys you want as arguments

(async () => {
    await APIWrapper.key() // Key Info
    await APIWrapper.player("testuuid") // Player Info
})();
```

