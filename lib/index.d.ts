export declare class HypixelAPI {
    static apikeys: string[];
    constructor(...keys: string[]);
    getNextKey(): string;
    sendactualrequest(path: string, usekeys: boolean, extra?: string): Promise<any>;
    key(): Promise<any>;
    player(uuid: string): Promise<any>;
    friends(uuid: string): Promise<any>;
    recentgames(uuid: string): Promise<any>;
    status(uuid: string): Promise<any>;
    rankedskywars(uuid: string): Promise<any>;
    resources(method: "achievements" | "challenges" | "quests" | "guilds/achievements" | "guilds/permissions" | "skyblock/collections" | "skyblock/skills"): Promise<any>;
    boosters(): Promise<any>;
    counts(): Promise<any>;
    leaderboards(): Promise<any>;
    punishmentstats(): Promise<any>;
}
