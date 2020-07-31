import { SocialFeedData, SocialFeedType } from '../../types/feedTypes';

// Newer items on top.

const item1: SocialFeedData = {
  id: 'jr-social-item-1',
  title: 'number 1',
  link: '',
  description: '',
  description_short: '',
  tags: [
    'random tag', 'yolo'
  ],
  hashtags: [
    '#holy moly', '#kek'
  ],
  giphy_still: 'NA',
  giphy_medium: 'NA',
  publishDate: '2020-05-16T07:00:00+10:00',
  socialPublishDate: '2020-05-16T07:00:00+10:00',
  feature_image: 'NA',
  socials: [
    // SocialFeedType.FacebookText,
    SocialFeedType.TwitterText,
    SocialFeedType.TumblrText,
    SocialFeedType.RedditText,
  ],
  curated_type: 'curated_social'
};

export const feedSocialJRList: SocialFeedData[] = [
  item1,
  // item2,
];
