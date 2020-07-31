import tumblr from 'tumblr.js';
import logger from '../util/logger';

export default class TumblrClient {
  client: any;
  blogName: string;

  constructor({
    blogName,
    token,
    token_secret,
  }) {
    this.client = tumblr.createClient({
      credentials: {
        consumer_key: process.env.TUMBLR_API_KEY as string,
        consumer_secret: process.env.TUMBLR_API_KEY_SECRET as string,
        token,
        token_secret,
      },
      returnPromises: true,
    });
    this.blogName = blogName
  }

  async sendTextPost({ title, body }: { title: string; body: string; }): Promise<void> {
    try {
      this.client
      .createTextPost(this.blogName, {
        title,
        body,
      }, () => logger.info('done'));
    } catch(error) {
      throw new Error(`${error} - tumblrClient sendTextPost`);
    }
  };

  async sendLinkPost({ title, url }: { title: string; url: string; }): Promise<void> {
    try {
      this.client
      .createLinkPost(this.blogName, {
        title,
        url,
        // thumbnail,
        // excerpt,
        // author,
        // description,
      }, () => logger.info('done'));
    } catch(error) {
      throw new Error(`${error} - tumblrClient sendLinkPost`);
    }
  };

  // https://tumblr.github.io/tumblr.js/TumblrClient.html#.createPhotoPost
  async sendPhotoPost({ source }: { source: string; }): Promise<void> {
    this.client
      .createPhotoPost(this.blogName, {
        source,
        // data,
        // data64,
        // caption,
      }, () => console.log('done'));
  };
}
