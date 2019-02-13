// Type definitions for slackbots 1.2.0
// Project: https://github.com/mishk0/slack-bot-api
// Definitions by: Alex Hughes <https://github.com/alxhghs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "slackbots" {
export class Bot {
    constructor(params: Params);
    public on(event: BotEvents, func: (data?: any) => void): void;
    public postMessageToChannel: (
        channel: string,
        message: string,
        params: Params 
    ) => void;
    public postMessageToUser: (
        user: string,
        message: string,
        params: Params
    ) => void;
    public postMessageToGroup: (        
        group: string,
        message: string,
        params: Params 
    ) => void;
    public getChannels: () => Promise<any>;
    public getGroups: () => Promise<any>;
    public getUsers: () => Promise<any>;
    public getImChannels: () => Promise<any>;
    public getChannel: (name: string) => Promise<any>;
    public getGroup: (name: string) => Promise<any>;
    public getUser: (name: string) => Promise<any>;
    public getUserByEmail: (name: string) => Promise<any>;
    public getChannelId: (name: string) => Promise<any>;
    public getGroupId: (name: string) => Promise<any>;
    public getUserId: (name: string) => Promise<any>;
    public getChatId: (name: string) => Promise<any>;
    public postEphermal: (
        id: string, 
        user: string, 
        text: string, 
        params: Params
    ) => Promise<any>;
    public postMessage: (
        id: string, 
        text: string, 
        params: Params
    ) => Promise<any>;
    public updateMessage: (
        channelId: string,
        timestamp: string,
        text: string,
        params: Params
    ) => Promise<any>;
}

export type Params = {
    token?: string;
    name?: string;
    disconnect?: boolean;
};

export type BotEvents = (
    "message"
    | "start"
    | "open"
    | "close"
    | "error"
);

export type User = {
    id: string;
    team_id?: string;
    name?: string;
    deleted?: boolean;
    color?: string;
    real_name?: string;
    tz?: string;
    tz_label?: string;
    tz_offset?: number;
    profile: {
        title?: string;
        phone?: string;
        skype?: string;
        real_name?: string;
        real_name_normalized?: string;
        display_name: string;
        display_name_normalized?: string;
        fields?: null;
        status_text?: string;
        status_emoji?: string;
        status_expiration?: number;
        avatar_hash?: string;
        image_original?: string; 
        email?: string;
        image_24?: string;
        image_32?: string;
        image_48?: string;
        image_72?: string;
        image_192?: string;
        image_512?: string;
        image_1024?: string;
        status_text_canonical?: string;
        team?: string;
        is_custom_image?: boolean;
    };
    is_admin?: boolean;
    is_owner?: boolean;
    is_primary_owner?: boolean;
    is_restricted?: boolean;
    is_ultra_restricted?: boolean;
    is_bot?: boolean;
    is_app_user?: boolean;
    updated?: number;
    presence?: string;
};

export type Channel = {
    id: string;
    name: string;
    is_channel: boolean;
    created: number; 
    is_archived: boolean;
    is_general: boolean;
    unlinked: number;
    creator: string;
    name_normalized: string;
    is_shared: boolean;
    is_org_shared: boolean;
    has_pins: boolean;
    is_member: boolean;
    is_private: boolean;
    is_mpim: boolean;
    previous_names: string[];
    priority: number;
};

}
