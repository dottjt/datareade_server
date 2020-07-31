export declare enum FeedType {
    CuratedType = "CuratedType",
    AggregatedType = "AggregatedType"
}
export declare type Feed = {
    id: string;
    name: string;
    url?: string;
    feed_type: FeedType;
};
export declare enum SocialFeedType {
    TwitterText = "TwitterText",
    TumblrText = "TumblrText",
    RedditText = "RedditText",
    RedditLink = "RedditLink"
}
export declare type SocialFeedData = {
    id: string;
    title: string;
    link: string;
    description: string;
    description_short: string;
    tags: string[];
    hashtags: string[];
    giphy_still: string;
    giphy_medium: string;
    publishDate: string;
    feature_image: string;
    socials: SocialFeedType[];
    curated_type: string;
};
export declare type CuratedFeedDBItem = {
    id: string;
    title: string;
    publishDate: string;
    curated_type: string;
    socials: string;
};
export declare type AggregatedDBFeedItem = {
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
};
export declare type RSSFeedItem = {
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
};
