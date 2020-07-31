"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postEpisodeToReddit = exports.postEpisodeToDiscord = exports.postEpisodeToTwitter = exports.PodcastFeedType = void 0;
var redditMessages_1 = require("../../messages/redditMessages");
var discordMessages_1 = require("../../messages/discordMessages");
var twitterMessages_1 = require("../../messages/twitterMessages");
var PodcastFeedType;
(function (PodcastFeedType) {
    PodcastFeedType["TheNeverFapDeluxeDaily"] = "TheNeverFapDeluxeDaily";
    PodcastFeedType["TheWritersDaily"] = "TheWritersDaily";
})(PodcastFeedType = exports.PodcastFeedType || (exports.PodcastFeedType = {}));
var getTwitterText = function (item, type) {
    switch (type) {
        case PodcastFeedType.TheNeverFapDeluxeDaily: {
            return twitterMessages_1.theNeverFapDeluxeDailyNewEpisodeTwitterText(item);
        }
        case PodcastFeedType.TheWritersDaily: {
            return twitterMessages_1.theWritersDailyNewEpisodeTwitterText(item);
        }
    }
};
exports.postEpisodeToTwitter = function (twitterClient, item, type) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, twitterClient.sendTextPost({
                    text: getTwitterText(item, type),
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var getDiscordChannnelId = function (type) {
    switch (type) {
        case PodcastFeedType.TheNeverFapDeluxeDaily: {
            return process.env.RECOVERYCHAT_NEVERFAPDELUXEPODCAST;
        }
        case PodcastFeedType.TheWritersDaily: {
            return '714384916309213264'; // podcasts channel in The Writer's Daily discord server
        }
    }
};
var getDiscordMessageEmbed = function (item, type) {
    switch (type) {
        case PodcastFeedType.TheNeverFapDeluxeDaily: {
            return discordMessages_1.theNeverFapDeluxeDailyNewEpisodeDiscordEmbed(item);
        }
        case PodcastFeedType.TheWritersDaily: {
            return discordMessages_1.theWritersDailyNewEpisodeDiscordEmbed(item);
        }
    }
};
exports.postEpisodeToDiscord = function (discordClient, item, type) { return __awaiter(void 0, void 0, void 0, function () {
    var channelId, messageEmbed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                channelId = getDiscordChannnelId(type);
                messageEmbed = getDiscordMessageEmbed(item, type);
                return [4 /*yield*/, discordClient.sendChannelMessageEmbed({
                        channelId: channelId,
                        messageEmbed: messageEmbed,
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, discordClient.sendChannelTextMessage({
                        channelId: channelId,
                        text: item.title + " " + item.castboxLink,
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var getRedditTitle = function (item, type) {
    switch (type) {
        case PodcastFeedType.TheNeverFapDeluxeDaily: {
            return item.title + " - The NeverFap Deluxe Daily Podcast";
        }
        case PodcastFeedType.TheWritersDaily: {
            return item.title + " - The Writer's Daily Podcast";
        }
    }
};
var getRedditText = function (item, type) {
    switch (type) {
        case PodcastFeedType.TheNeverFapDeluxeDaily: {
            return redditMessages_1.theNeverFapDeluxeDailyNewEpisodeRedditText(item);
        }
        case PodcastFeedType.TheWritersDaily: {
            return redditMessages_1.theWritersDailyNewEpisodeRedditText(item);
        }
    }
};
exports.postEpisodeToReddit = function (redditClient, item, type) { return __awaiter(void 0, void 0, void 0, function () {
    var title, text;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = getRedditTitle(item, type);
                text = getRedditText(item, type);
                return [4 /*yield*/, redditClient.sendTextPost({
                        title: title,
                        text: text,
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
