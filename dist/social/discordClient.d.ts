import { Client, MessageEmbed, Message } from 'discord.js';
export default class DiscordClient {
    client?: Client;
    botToken: string;
    constructor({ botToken }: {
        botToken: any;
    });
    init(): Promise<void>;
    destroy(): void;
    sendChannelMessageEmbed({ channelId, messageEmbed }: {
        channelId: string;
        messageEmbed: MessageEmbed;
    }): Promise<Message>;
    sendChannelTextMessage({ channelId, text }: {
        channelId: string;
        text: string;
    }): Promise<Message>;
}
