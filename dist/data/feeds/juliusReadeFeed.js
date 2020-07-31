"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedSocialJRList = void 0;
var feedTypes_1 = require("../../types/feedTypes");
// Newer items on top.
var item1 = {
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
    publishDate: 'Thu, 11 Jun 2020 21:00:00 +0000',
    feature_image: 'NA',
    socials: [
        // SocialFeedType.FacebookText,
        feedTypes_1.SocialFeedType.TwitterText,
        feedTypes_1.SocialFeedType.TumblrText,
        feedTypes_1.SocialFeedType.RedditText,
    ],
    curated_type: 'curated_social'
};
exports.feedSocialJRList = [
    item1,
];
