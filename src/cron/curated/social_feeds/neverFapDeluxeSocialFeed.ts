import {
  NEVERFAP_DELUXE_SOCIAL_FEED_ID
} from '../../../const';

import { data, EpisodeData, SocialFeedData, SocialFeedType } from '@dottjt/datareade';

import curatedFeedCheck10Minutes from '../../curatedFeedCheck10Minutes';

import sendSocialFeedData from './socialFeedsUtil';
import { neverFapDeluxeSocialClient } from '../../../social/clientUtil';

const neverFapDeluxeSocialFeed = async () => {
  const { feedSocialNFD } = data;

  const itemsToPost: (SocialFeedData|EpisodeData)[] = await curatedFeedCheck10Minutes({
    feedId: NEVERFAP_DELUXE_SOCIAL_FEED_ID,
    items: feedSocialNFD,
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
