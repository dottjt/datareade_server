import { Context, Next } from 'koa';
import OAuthLib from 'oauth';

const oauth = new OAuthLib.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.TWITTER_API_CONSUMER_KEY,
  process.env.TWITTER_API_CONSUMER_SECRET,
  '1.0A', 'http://198.199.67.180:7777/twitter/callback', 'HMAC-SHA1'
);

const getOAuthReqToken = (): Promise<{
  redirectUrl: string;
  oauthRequestToken: string;
  oauthRequestTokenSecret: string;
}> => new Promise((resolve, reject) => {
  oauth.getOAuthRequestToken(function(error, oauthRequestToken, oauthRequestTokenSecret, results){
    if (error) {
      reject(`Error getting OAuth request token : ${error}`);
    } else {
      console.log('oauthRequestToken', oauthRequestToken);
      console.log('oauthRequestTokenSecret', oauthRequestTokenSecret);
      resolve({
        redirectUrl: `https://api.twitter.com/oauth/authorize?oauth_token=${oauthRequestToken}`,
        oauthRequestToken,
        oauthRequestTokenSecret,
      });
    }
  });
});

export const twitterConnect = async (ctx: Context, next: Next) => {
  try {
    const {
      redirectUrl,
      oauthRequestToken,
      oauthRequestTokenSecret,
    } = await getOAuthReqToken();

    ctx.session.oauthRequestToken = oauthRequestToken;
    ctx.session.oauthRequestTokenSecret = oauthRequestTokenSecret;

    ctx.redirect(redirectUrl);
  } catch (error) {
    throw new Error(error);
  }
};

const getOAuthAccessToken = (
  oauth_verifier: string,
  oauthRequestToken: string,
  oauthRequestTokenSecret: string,
): Promise<{
  oauthAccessToken,
  oauthAccessTokenSecret,
}> => new Promise((resolve, reject) => {
  oauth.getOAuthAccessToken(
    // process.env.TWITTER_API_CONSUMER_KEY,
    // process.env.TWITTER_API_CONSUMER_SECRET,
    oauthRequestToken,
    oauthRequestTokenSecret,
      oauth_verifier, function(error, oauthAccessToken, oauthAccessTokenSecret, results) {
    if (error) {
      reject("Error getting OAuth access token : " + results);
    } else {
      resolve({
        oauthAccessToken,
        oauthAccessTokenSecret,
      });
      // Right here is where we would write out some nice user stuff
      // consumer.get("http://twitter.com/account/verify_credentials.json", req.session.oauthAccessToken, req.session.oauthAccessTokenSecret, function (error, data, response) {
      //   if (error) {
      //     res.send("Error getting twitter screen name : " + sys.inspect(error), 500);
      //   } else {
      //     req.session.twitterScreenName = data["screen_name"];
      //     res.send('You are signed in: ' + req.session.twitterScreenName)
      //   }
      // });
    }
  });
});

export const twitterCallback = async (ctx: Context, next: Next) => {
  try {
    const {
      oauthAccessToken,
      oauthAccessTokenSecret,
    } = await getOAuthAccessToken(
      ctx.query.oauth_verifier,
      ctx.session.oauthRequestToken,
      ctx.session.oauthRequestTokenSecret,
    );

    console.log('oauthAccessToken', oauthAccessToken);
    console.log('oauthAccessTokenSecret', oauthAccessTokenSecret);

    ctx.body = {
      oauthAccessToken,
      oauthAccessTokenSecret,
    };
  } catch(error) {
    throw new Error(error);
  }
};