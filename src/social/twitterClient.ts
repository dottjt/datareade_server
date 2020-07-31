import TwitterLite from 'twitter-lite';
import logger from '../util/logger';

// user authentication (so will login as Julius Reade)
// const twitterClient = new TwitterLite({
//   subdomain:            'api', // NOTE: I may need to change this to 'upload' for images. But I won't worry about images for now.
//   consumer_key:         process.env.TWITTER_API_CONSUMER_KEY as string,
//   consumer_secret:      process.env.TWITTER_API_CONSUMER_SECRET as string,
//   access_token_key:     process.env.TWITTER_API_ACCESS_TOKEN as string,
//   access_token_secret:  process.env.TWITTER_API_ACCESS_TOKEN_SECRET as string,
// });

// app authentication
// const authenticateTwitter = async () => {
//   try {
//     const user = new TwitterLite({
//       consumer_key: process.env.TWITTER_API_CONSUMER_KEY as string,
//       consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET as string,
//     });

//     const response = await user.getBearerToken();
//     // @ts-ignore
//     const client = new TwitterLite({
//       bearer_token: response.access_token
//     });

//     return client;
//   } catch(error) {
//     throw new Error(error);
//   }
// }

// https://stackoverflow.com/questions/58849249/post-to-twitter-on-behalf-of-another-user-using-node-js-express-twit-and-pass
class TwitterClient {
  client;

  constructor({
    access_token_key,
    access_token_secret,
  }) {
    this.client = new TwitterLite({
      subdomain:            'api', // NOTE: I may need to change this to 'upload' for images. But I won't worry about images for now.
      consumer_key:         process.env.TWITTER_API_CONSUMER_KEY as string,
      consumer_secret:      process.env.TWITTER_API_CONSUMER_SECRET as string,
      access_token_key,
      access_token_secret,
    });
  }
  // async init() {
  //   this.client = await authenticateTwitter();
  // }

  async sendTextPost({ text }: { text: string; }): Promise<string> {
    try {
      const tweet = await this.client?.post('statuses/update', {
        status: text,
        // in_reply_to_status_id: lastTweetID,
        auto_populate_reply_metadata: true
      });
      logger.info('twitter - sendTextPost');
      return tweet.id_str;
    } catch (error) {
      throw new Error(`${error} - twitterClient - sendTextPost`);
    }
  };

  async sendPhotoPost({ imageUrl }: { imageUrl: string; }) {
    //
    // const data = fs.readFileSync(path);
    // const tweet = await client.post('media/upload', {
    //   media_data: Buffer.from(data).toString('base64')
    // }).then((media) => {
    //   fs.unlink(path, () => {});
    //   return media;
    // });
    // logger.info('twitter - sendPhotoPost');
    // return tweet.id_str;
  };

  // async sendLinkPost({ link, tags }: { link: string; }) {
  //   // this.client.
  // };
}

export default TwitterClient;
