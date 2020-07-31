"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedSocialNFDList = void 0;
var feedTypes_1 = require("../../types/feedTypes");
// Newer items on top.
var item1 = {
    id: 'nfd-social-item-1',
    title: 'number 1',
    link: 'https://cake.com',
    description: 'https://cake.com',
    description_short: 'https://cake.com',
    tags: [
        'random tag', 'yolo'
    ],
    hashtags: [
        '#holy moly', '#kek'
    ],
    giphy_still: 'https://cake.com',
    giphy_medium: 'https://cake.com',
    publishDate: 'Thu, 11 Jun 2020 21:00:00 +0000',
    feature_image: 'https://featurecakeage.com/',
    socials: [
        // SocialFeedType.FacebookText,
        feedTypes_1.SocialFeedType.TwitterText,
        feedTypes_1.SocialFeedType.TumblrText,
        feedTypes_1.SocialFeedType.RedditText,
    ],
    curated_type: 'curated_social'
};
exports.feedSocialNFDList = [
    item1,
];
