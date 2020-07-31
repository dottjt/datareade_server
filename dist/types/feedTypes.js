"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialFeedType = exports.FeedType = void 0;
var FeedType;
(function (FeedType) {
    FeedType["CuratedType"] = "CuratedType";
    FeedType["AggregatedType"] = "AggregatedType";
})(FeedType = exports.FeedType || (exports.FeedType = {}));
var SocialFeedType;
(function (SocialFeedType) {
    // FacebookText = "FacebookText",
    // FacebookLink = "FacebookLink",
    // FacebookPhoto = "FacebookPhoto",
    SocialFeedType["TwitterText"] = "TwitterText";
    // TwitterLink = "TwitterLink",
    // TwitterPhoto = "TwitterPhoto",
    // InstagramPhoto = "InstagramPhoto",
    // PinterestPhoto = "PinterestPhoto",
    SocialFeedType["TumblrText"] = "TumblrText";
    // TumblrLink = "TumblrLink",
    // TumblrPhoto = "TumblrPhoto",
    SocialFeedType["RedditText"] = "RedditText";
    SocialFeedType["RedditLink"] = "RedditLink";
    // RedditPhoto = "RedditPhoto",
    // TODO: NOT SURE?
    // DiscordText = "DiscordText"
})(SocialFeedType = exports.SocialFeedType || (exports.SocialFeedType = {}));
;
// in a way, the RSS Feed is the source of truth, but if we make safe assumptions we should be okay.
// Basically, we assume that the episodes were in fact posted. We can't guarantee it, but we can assume it happened and that the system is functional.
