"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HypixelAPI = void 0;
const axios_1 = require("axios");
let curKeyIndex = 0;
class HypixelAPI {
    constructor(...keys) {
        if (keys.length >= 1) {
            HypixelAPI.apikeys = keys;
        }
        else {
            throw new Error("The amount of API keys provided did not meet the minimum threshold (1).");
        }
    }
    getNextKey() {
        if (HypixelAPI.apikeys.length !== curKeyIndex) {
            curKeyIndex++;
            return HypixelAPI.apikeys[curKeyIndex];
        }
        else {
            curKeyIndex = 0;
            return HypixelAPI.apikeys[curKeyIndex];
        }
    }
    sendactualrequest(path, usekeys, extra) {
        if (extra === undefined)
            extra = "";
        let response;
        let keyBlock = "";
        if (usekeys) {
            keyBlock = `&key=${this.getNextKey()}`;
        }
        return new Promise((res, rej) => {
            axios_1.default.get(`https://api.hypixel.net/${path}${keyBlock}${extra}`).then(res => {
                if (res.data) {
                    response = res.data;
                }
            }).catch(e => {
                throw new Error(`Hypixel API Wrapper: Request failed (${e})`);
            }).finally(function () {
                res(response);
            });
        });
    }
    async key() {
        return this.sendactualrequest("key", true);
    }
    async player(uuid) {
        return this.sendactualrequest("player", true, `&uuid=${uuid}`);
    }
    async friends(uuid) {
        return this.sendactualrequest("friends", true, `&uuid=${uuid}`);
    }
    async recentgames(uuid) {
        return this.sendactualrequest("recentgames", true, `&uuid=${uuid}`);
    }
    async status(uuid) {
        return this.sendactualrequest("status", true, `&uuid=${uuid}`);
    }
    async rankedskywars(uuid) {
        return this.sendactualrequest("ranked/skywars", true, `&uuid=${uuid}`);
    }
    async resources(method) {
        return this.sendactualrequest(`resources/${method}`, false);
    }
    // Not doing skyblock
    async boosters() {
        return this.sendactualrequest("boosters", true);
    }
    async counts() {
        return this.sendactualrequest("counts", true);
    }
    async leaderboards() {
        return this.sendactualrequest("leaderboards", true);
    }
    async punishmentstats() {
        return this.sendactualrequest("punishmentstats", true);
    }
}
exports.HypixelAPI = HypixelAPI;
