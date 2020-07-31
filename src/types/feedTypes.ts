export enum FeedType {
  CuratedType="CuratedType",
  AggregatedType="AggregatedType",
}

export type Feed = {
  id: string;
  name: string;
  url?: string;
  feed_type: FeedType;
};

export enum SocialFeedType {
  // FacebookText = "FacebookText",
  // FacebookLink = "FacebookLink",
  // FacebookPhoto = "FacebookPhoto",
  TwitterText = "TwitterText",
  // TwitterLink = "TwitterLink",
  // TwitterPhoto = "TwitterPhoto",
  // InstagramPhoto = "InstagramPhoto",
  // PinterestPhoto = "PinterestPhoto",
  TumblrText = "TumblrText",
  // TumblrLink = "TumblrLink",
  // TumblrPhoto = "TumblrPhoto",
  RedditText = "RedditText",
  RedditLink = "RedditLink",
  // RedditPhoto = "RedditPhoto",

  // TODO: NOT SURE?
  // DiscordText = "DiscordText"
};

export type SocialFeedData = {
  id: string;
  title: string;
  link: string;
  description: string;
  description_short: string;
  tags: string[];
  hashtags: string[];
  giphy_still: string;
  giphy_medium: string;
  publishDate: string; // in this context, they are the same values.
  socialPublishDate: string;
  feature_image: string;
  socials: SocialFeedType[];
  curated_type: string;
};

export type CuratedFeedDBItem = {
  id: string;
  title: string;
  publishDate: string;
  curated_type: string;
  socials: string;
}

export type AggregatedDBFeedItem = {
  id: string;
  title: string;
  author: string;
  link: string;
  website_link: string;
  description: string;
  feature_image: string;
  tags: string;
  pub_date: string;
  social_type: SocialFeedType;
}

// NOTE: So, this is still ...well actually, this is no longer necessary.
// Because I can get the podcast data from within the episodesListTWD.
// BUT it is still necessary for outside systems. Although, I can probably just send this data directly
// to integromat. Hmmmmm that makes more sense than checking a RSS feed, because it's closer to how I do it here.
export type RSSFeedItem = {
  title: string;
  link: string;
  author: string;
  description: string;
  'jr:type': string;
  'jr:tags': string;
  'jr:hashtags': string;
  'jr:giphy_still': string;
  'jr:giphy_medium': string;
  publishDate: string;
  'jr:feature_image': string;
  'jr:socials': string;
}
// in a way, the RSS Feed is the source of truth, but if we make safe assumptions we should be okay.
// Basically, we assume that the episodes were in fact posted. We can't guarantee it, but we can assume it happened and that the system is functional.
