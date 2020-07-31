import { SocialFeedType, SocialFeedData } from '../../../types/feedTypes';
import TwitterClient from "../../../social/twitterClient";
import RedditClient from "../../../social/redditClient";
import DiscordClient from "../../../social/discordClient";
import TumblrClient from "../../../social/tumblrClient";

import { SocialClients } from '../../../social/clientUtil';

const sendSocialFeedDataTumblr = async (item: SocialFeedData, socialType: SocialFeedType, tumblrClient: TumblrClient): Promise<void> => {
  switch(item.curated_type) {
    case SocialFeedType.TumblrText: {
      await tumblrClient.sendTextPost({
        title: item.title,
        body: item.description,
      });
    }
    // case SocialFeedType.TumblrLink: {
    //   await tumblrClient.sendLinkPost({
    //     title: item.title,
    //     url: item.link,
    //   });
    // }
    // case SocialFeedType.TumblrPhoto: {
    //   await tumblrClient.sendPhotoPost({
    //     source: item.feature_image,
    //     // data: feature_image,
    //   });
    // }
  }
}

const sendSocialFeedDataReddit = async (item: SocialFeedData, socialType: SocialFeedType, redditClient: RedditClient): Promise<void> => {
  switch(item.curated_type) {
    case SocialFeedType.RedditText: {
      await redditClient.sendTextPost({
        title: item.title,
        text: item.description,
      })
    }
    case SocialFeedType.RedditLink: {
      await redditClient.sendLinkPost({
        title: item.title,
        url: item.link,
      })
    }
    // case SocialFeedType.RedditPhoto: {

    // }
  }
}

const sendSocialFeedDataTwitter = async (item: SocialFeedData, socialType: SocialFeedType, twitterClient: TwitterClient): Promise<void> => {
  switch(item.curated_type) {
    case SocialFeedType.TwitterText: {
      await twitterClient.sendTextPost({ text: item.description_short });
    }
    // case SocialFeedType.TwitterPhoto: {
    //   await twitterClient.sendPhotoPost({ imageUrl: item.feature_image });
    // }
    // case SocialFeedType.TwitterLink: {
    //   await twitterClient();
    // }
    default: {
      throw new Error(`sendSocialFeedDataTwitter - ${socialType}`);
    }
  }
}

const sendSocialFeedData = async (item: SocialFeedData, socialType: SocialFeedType, socialClients: SocialClients) => {
  switch (socialType) {
    case SocialFeedType.TwitterText:
    // case SocialFeedType.TwitterLink:
    // case SocialFeedType.TwitterPhoto:
    {
      const twitterClient = socialClients.twitterClient;
      await sendSocialFeedDataTwitter(item, socialType, twitterClient);
    }
    case SocialFeedType.TumblrText:
    // case SocialFeedType.TumblrLink:
    // case SocialFeedType.TumblrPhoto:
    {
      const tumblrClient = socialClients.tumblrClient;
      await sendSocialFeedDataTumblr(item, socialType, tumblrClient);
    }
    case SocialFeedType.RedditText:
    case SocialFeedType.RedditLink:
    // case SocialFeedType.RedditPhoto:
    {
      const redditClient = socialClients.redditClient;
      await sendSocialFeedDataReddit(item, socialType, redditClient);
    }
  }
}

export default sendSocialFeedData;


// No API Access
// case SocialFeedType.InstagramPhoto: {

// }
// case SocialFeedType.FacebookText: {

// }
// case SocialFeedType.FacebookLink: {

// }
// case SocialFeedType.FacebookPhoto: {

// }
// case SocialFeedType.PinterestPhoto: {

// }
