import Discord, { Client, ClientUser, TextChannel, MessageEmbed, Channel, Message } from 'discord.js';
import logger from '../util/logger';

const onReady = (client: Client, resolve) =>
  () => {
    const juliusReade: ClientUser | null = client.user;
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(juliusReade?.username + ' - (' + juliusReade?.id + ')');
    resolve('Connected');
  };

const clientReady = (client: Client) => new Promise(resolve => client.once('ready', onReady(client, resolve)));

const connectDiscord = async (botToken: string): Promise<Client> => {
  const client: Client = new Discord.Client({
    messageCacheMaxSize: 2000, // 200 default
    messageCacheLifetime: 3600, // Allow cached messages to 1 hour, so forever. default 0
    messageSweepInterval: 600 // every 10 minutes, remove all cached messages. default 0
  });

  client.login(botToken);

  // Incoming Events
  await clientReady(client);

  return client;
}

export default class DiscordClient {
  client?: Client;
  botToken: string;

  constructor({ botToken }) {
    this.botToken = botToken;
  }
  async init(): Promise<void> { this.client = await connectDiscord(this.botToken); }
  destroy(): void { this.client?.destroy(); }

  async sendChannelMessageEmbed(
    { channelId, messageEmbed }:
    { channelId: string; messageEmbed: MessageEmbed; }
  ): Promise<Message> {
    try {
      const channel: Channel | undefined = await this.client?.channels.fetch(channelId);
      const message = await (channel as TextChannel).send(messageEmbed);
      logger.info('discord - sendChannelMessageEmbed');
      return message;
    } catch(error) {
      throw new Error(`${error} - discordClient - sendChannelMessageEmbed`);
    }
  }

  async sendChannelTextMessage(
    { channelId, text }:
    { channelId: string; text: string; }
  ): Promise<Message> {
    try {
      const channel: Channel | undefined = await this.client?.channels.fetch(channelId);
      const message = await (channel as TextChannel).send(text);
      logger.info('discord - sendChannelTextMessage');
      return message;
    } catch(error) {
      throw new Error(`${error} - discordClient - sendChannelTextMessage`);
    }
  }
}
