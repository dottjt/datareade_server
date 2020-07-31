import {
  NEVERFAP_DELUXE_SOCIAL_FEED_ID
} from '../../../const';

import { EpisodeData } from '../../../types/episodeTypes';
import { SocialFeedData, SocialFeedType } from '../../../types/feedTypes'

import curatedFeedCheck10Minutes from '../../curatedFeedCheck10Minutes';

import { feedSocialNFDList } from '../../../data/feeds/nfdSocialFeed';
import sendSocialFeedData from './socialFeedsUtil';
import { neverFapDeluxeSocialClient } from '../../../social/clientUtil';

const neverFapDeluxeSocialFeed = async () => {
  const itemsToPost: (SocialFeedData|EpisodeData)[] = await curatedFeedCheck10Minutes({
    feedId: NEVERFAP_DELUXE_SOCIAL_FEED_ID,
    items: feedSocialNFDList,
  });

  if (itemsToPost.length > 1) {
    const socialClients = await neverFapDeluxeSocialClient();

    for (const item of itemsToPost) {
      for (const itemSocial of item.socials) {

        await sendSocialFeedData(
          (item as SocialFeedData),
          (itemSocial as SocialFeedType),
          socialClients
        );
      }
    }
  }
};

export default neverFapDeluxeSocialFeed;
