import { SocialClients, theNeverFapDeluxePodcastClient } from "./social/clientUtil";
import axios from 'axios';
import { selectRandomPost } from "./util/util";

export const cronOptions = {
  scheduled: true,
  timezone: "Australia/Melbourne"
};

export enum SubmitPostType {
  Twitter='Twitter',
  Reddit='Reddit',
  Discord='Discord',
  Tumblr='Tumblr',
};

// TODO Do we want an open source option?

export const submitPost = async (postTitle: string, postUrl: string, submitPostType: SubmitPostType[]): Promise<void> => {
  const socialClients: SocialClients = await theNeverFapDeluxePodcastClient();

  for (const type of submitPostType) {
    switch(type) {
      case SubmitPostType.Twitter: {
        await socialClients.twitterClient.sendTextPost({
          text: `${postTitle} ${postUrl}`,
        });
        break;
      }
      case SubmitPostType.Reddit: {
        const submissionName = await socialClients.redditClient.sendLinkPost({
          title: postTitle,
          url: postUrl,
        });
        await socialClients.redditClient.setFlair({ submissionName, flair_template_id: 'ffd04a80-cfa3-11ea-b2bb-0e4bfb9c3467' }) // #NeverFapDeluxeUpdate
        break;
      }
      case SubmitPostType.Discord: {
        await socialClients.discordClient.sendChannelTextMessage({
          channelId: '577750363432812545', // general channel
          text: `${postTitle} ${postUrl}`,
        });
        break;
      }
      case SubmitPostType.Tumblr: {
        await socialClients.tumblrClient.sendLinkPost({
          title: postTitle,
          url: postUrl,
        });
        break;
      }
    }
  }
};

export const twitterPlug = async () => {
  try {
    const postTitle = `Feel Free To Follow The NeverFap Deluxe Twitter Account!`;
    const postUrl = `https://twitter.com/neverfapdeluxe`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Reddit,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Twitter Plug`);
  }
};

export const subredditPlug = async () => {
  try {
    const postTitle = `Come Join The NeverFap Deluxe Reddit Community! You Won't Be Disappointed!`;
    const postUrl = `https://www.reddit.com/r/neverfapdeluxe/`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Subreddit Plug`);
  }
};

export const freePlug = async () => {
  try {
    const postTitle = `Did You Know That NeverFap Deluxe Is 100% Free? Gee Golly Gosh, Thank You Mr. Reade!`;
    const postUrl = `https://neverfapdeluxe.com/`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Subreddit Plug`);
  }
};

export const nfdPracticePlug = async () => {
  try {
    const response = await axios.get('https://neverfapdeluxe.netlify.app/content_practices/index.json' as string, {});
    const practices = response.data.data.practices;
    const practice = await selectRandomPost(practices, 'nfd_practices');

    const postTitle = `NeverFap Deluxe's Weekly Featured Practice: ${practice[0].title}`;
    const postUrl = `https://neverfapdeluxe.com/practices/${practice[0].slug}`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Reddit,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Tuesday's Featured Practice`);
  }
};

export const nfdGuidePlug = async () => {
  try {
    const postTitle = `Have Your Read Through The NeverFap Deluxe Guide? Well, Now Is Your Chance Lucky Stranger!`;
    const postUrl = `https://neverfapdeluxe.com/guide`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Reddit,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - NFD Guide Plug`);
  }
};

export const summaryPlug = async () => {
  try {
    const postTitle = `The NeverFap Deluxe Summary Is A Fantastic Way To Retain The Basics. Read Through It Today!`;
    const postUrl = `https://neverfapdeluxe.com/summary`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Reddit,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - NFD Summary Plug`);
  }
};

export const nfdBiblePlug = async () => {
  try {
    const postTitle = `The NeverFap Deluxe Bible. Available In PDF/EPUB Format. Download It Free Today!`;
    const postUrl = `https://neverfapdeluxe.com/ebooks/neverfap-deluxe-bible.pdf`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Reddit,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - NFD Bible Plug`);
  }
};

export const donatePlug = async () => {
  try {
    const postTitle = `Would You Like To Make A Small Donation To NeverFap Deluxe? This Initiative Is 100% Free And Your Financial Support Is Greatly Appreciated!`;
    const postUrl = `https://www.paypal.me/neverfapdeluxe`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Reddit,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - NFD Donate Plug`);
  }
};

export const askTheReadeAQuestion = async () => {
  try {
    const socialClients: SocialClients = await theNeverFapDeluxePodcastClient();
    const submissionName = await socialClients.redditClient.sendTextPost({
      title: `It's Another Ask The Reade A Question Wednesday!`,
      text: `It's that time of the week to ask Daddy Reade a question! So go crazy folks!?!`
    });
    await socialClients.redditClient.setFlair({ submissionName, flair_template_id: '9737d408-b3ff-11ea-9ab1-0e05b8624c8f' }) // ASK The Reade
  } catch (err) {
    throw new Error(`${err} - Wednesday Ask The Reade A Question`);
  }
};

export const youtubePlug = async () => {
  try {
    const postTitle = `Did You Know That NeverFap Deluxe Has A YouTube Channel!?! Well, Now You Do!`;
    const postUrl = `https://www.youtube.com/channel/UCHiMNZ86_zwW1RebKDcZEoQ`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Reddit,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Youtube Plug`);
  }
};

export const discordPlug = async () => {
  try {
    const postTitle = `Ready To Join A Supportive Recovery Community? Checkout The NeverFap Deluxe Discord Server!`;
    const postUrl = `https://discord.gg/TuwARWk`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Reddit,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Discord Plug`);
  }
};

export const nfdArticlePlug = async () => {
  try {
    const response = await axios.get('https://neverfapdeluxe.netlify.app/content_articles/index.json' as string, {});
    const articles = response.data.data.articles;
    const article = await selectRandomPost(articles, 'nfd_articles');

    const postTitle = `NeverFap Deluxe's Weekly Featured Article: ${article[0].title}`;
    const postUrl = `https://neverfapdeluxe.com/articles/${article[0].slug}`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Discord,
      SubmitPostType.Reddit,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Thursday's Featured Article`);
  }
};

export const facebookPlug = async () => {
  try {
    const postTitle = `Follow Our NeverFap Deluxe Facebook Account To Help Support The Brand!`;
    const postUrl = `https://www.facebook.com/NeverFapDeluxe`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Discord,
      SubmitPostType.Reddit,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Facebook Plug`);
  }
};

export const mobileAppPlug = async () => {
  try {
    const postTitle = `Download The NeverFap Deluxe Android App Today!`;
    const postUrl = `https://play.google.com/store/apps/details?id=com.ueno.nfdmobilev2`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Discord,
      SubmitPostType.Reddit,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Tuesday's Featured NeverFap Deluxe Practice`);
  }
};

export const websitePlug = async () => {
  try {
    const postTitle = 'Please don\'t forget to checkout the website! It explains literally everything you could possibly want to know about your recovery!';
    const postUrl = 'https://neverfapdeluxe.com';

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Discord,
      SubmitPostType.Reddit,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Sunday Promote Website`);
  }
};

export const hoveringPlug = async () => {
  try {
    const postTitle = `Struggle With Traditional Meditation? Try Our Newly Developed Hovering Meditation Technique!`;
    const postUrl = `https://neverfapdeluxe.com/hovering`;

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Reddit,
      SubmitPostType.Discord,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - NFD Donate Plug`);
  }
};

export const podcastPlug = async () => {
  try {
    const postTitle = 'Have You Listened To The NeverFap Deluxe Daily?! Well, What The Hell Are You Waiting For!';
    const postUrl = 'https://castbox.fm/channel/The-NeverFap-Deluxe-Daily-Podcast-id2979644?amp=1';

    await submitPost(postTitle, postUrl, [
      SubmitPostType.Twitter,
      SubmitPostType.Discord,
      SubmitPostType.Reddit,
      SubmitPostType.Tumblr,
    ]);
  } catch (err) {
    throw new Error(`${err} - Sunday Promote Website`);
  }
};
