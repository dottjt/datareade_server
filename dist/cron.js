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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_cron_1 = __importDefault(require("node-cron"));
var theWritersDailyPodcastFeed_1 = __importDefault(require("./cron/curated/podcast_feeds/theWritersDailyPodcastFeed"));
var neverFapDeluxeSocialFeed_1 = __importDefault(require("./cron/curated/social_feeds/neverFapDeluxeSocialFeed"));
var theNeverFapDeluxeDailyPodcastFeed_1 = __importDefault(require("./cron/curated/podcast_feeds/theNeverFapDeluxeDailyPodcastFeed"));
// import { postAccountabilityTallyToTwitter } from './cron/aggregated/neverFapDeluxe/postXXXToTwitterNFD';
// import { postLatestSubredditPostsToDiscord } from './cron/aggregated/neverFapDeluxe/postXXXToDiscordNFD';
// import { postAccountabilityTallyToReddit } from './cron/aggregated/neverFapDeluxe/postXXXToRedditNFD';
var netlifyBuilds_1 = require("./cron/netlifyBuilds");
var cronOptions = function () { return ({
    scheduled: true,
    timezone: "Australia/Melbourne"
}); };
var setupCron = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        node_cron_1.default.schedule('*/10 * * * *', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: // Every 10 Minutes
                    // Check Social Feeds For Content.
                    return [4 /*yield*/, theNeverFapDeluxeDailyPodcastFeed_1.default()];
                    case 1:
                        // Check Social Feeds For Content.
                        _a.sent();
                        // Run Cross Posting Functions
                        // TODO - maybe transfer this to the discord server.
                        // await postLatestSubredditPostsToDiscord();
                        // Post Podcast Content to Social Media
                        return [4 /*yield*/, theWritersDailyPodcastFeed_1.default()];
                    case 2:
                        // Run Cross Posting Functions
                        // TODO - maybe transfer this to the discord server.
                        // await postLatestSubredditPostsToDiscord();
                        // Post Podcast Content to Social Media
                        _a.sent();
                        return [4 /*yield*/, neverFapDeluxeSocialFeed_1.default()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, cronOptions());
        node_cron_1.default.schedule('0 7 * * *', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: // 7am Everyday
                    // Netlify Builds
                    return [4 /*yield*/, netlifyBuilds_1.buildTNDDWebsite()];
                    case 1:
                        // Netlify Builds
                        _a.sent();
                        return [4 /*yield*/, netlifyBuilds_1.buildTWDWebsite()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, cronOptions());
        return [2 /*return*/];
    });
}); };
exports.default = setupCron;
