import axios from "axios";

let curKeyIndex: number = 0;

export class HypixelAPI {
    static apikeys: string[];
    constructor(...keys: string[]) {
        if(keys.length >= 1) {
            HypixelAPI.apikeys = keys;
        } else {
            throw new Error("The amount of API keys provided did not meet the minimum threshold (1).")
        }
    }

    getNextKey(): string {
        if(HypixelAPI.apikeys.length !== curKeyIndex) {
            curKeyIndex++
            return HypixelAPI.apikeys[curKeyIndex]
        } else {
            curKeyIndex = 0;
            return HypixelAPI.apikeys[curKeyIndex]
        }
    }

    sendactualrequest(path: string, usekeys: boolean, extra?: string): Promise<any> {
        if(extra === undefined) extra = "";
        let response: any;
        let keyBlock = "";
        if(usekeys) {
            keyBlock = `&key=${this.getNextKey()}`
        }
        return new Promise((res, rej) => {
            axios.get(`https://api.hypixel.net/${path}${keyBlock}${extra}`).then(res => {
                if(res.data){
                    response = res.data
                }
            }).catch(e => {
                throw new Error(`Hypixel API Wrapper: Request failed (${e})`)
            }).finally(function() {
                res(response)
            })
        })
    }

    async key() {
        return this.sendactualrequest("key", true)
    }

    async player(uuid: string) {
        return this.sendactualrequest("player", true, `&uuid=${uuid}`)
    }

    async friends(uuid: string) {
        return this.sendactualrequest("friends", true, `&uuid=${uuid}`)
    }

    async recentgames(uuid: string) {
        return this.sendactualrequest("recentgames", true, `&uuid=${uuid}`)
    }

    async status(uuid: string) {
        return this.sendactualrequest("status", true, `&uuid=${uuid}`)
    }

    async rankedskywars(uuid: string) {
        return this.sendactualrequest("ranked/skywars", true, `&uuid=${uuid}`)
    }

    async resources(method: "achievements" | "challenges" | "quests" | "guilds/achievements" | "guilds/permissions" | "skyblock/collections" | "skyblock/skills") {
        return this.sendactualrequest(`resources/${method}`, false)
    }

    // Not doing skyblock

    async boosters() {
        return this.sendactualrequest("boosters", true)
    }

    async counts() {
        return this.sendactualrequest("counts", true)
    }

    async leaderboards() {
        return this.sendactualrequest("leaderboards", true)
    }

    async punishmentstats() {
        return this.sendactualrequest("punishmentstats", true)
    }

    async guild(method: "id" | "player" | "name", data: string) {
        return this.sendactualrequest("guild", true, `&${method}=${data}`)
    }

    async skyblock(method: "news" | "auction" | "bazaar" | "profile" | "profiles" | "bingo", data: string) {
        return this.sendactualrequest("skyblock", true, `&${method}=${data}`)
    }
}

