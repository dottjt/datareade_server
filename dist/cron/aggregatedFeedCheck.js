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
exports.aggregatedSubredditFeedCheck = void 0;
var redditClient_1 = __importDefault(require("../social/redditClient"));
var addNewAggregatedSubredditSubmissionItemsToDB = function (itemsArray) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, itemsArray_1, item;
    return __generator(this, function (_a) {
        for (_i = 0, itemsArray_1 = itemsArray; _i < itemsArray_1.length; _i++) {
            item = itemsArray_1[_i];
            // const nowDate = new Date();
            // const toPublishDate = new Date(item.publishDate);
            // if (nowDate > toPublishDate) {
            //   // Maybe insert them into the DB?
            //   await knexFeed('aggregated_social_feed').insert({
            //   });
            //   newItems.push(item);
            // }
        }
        // return newItems;
        return [2 /*return*/, []];
    });
}); };
// https://github.com/not-an-aardvark/snoowrap/blob/master/src/objects/Submission.d.ts
exports.aggregatedSubredditFeedCheck = function (feedId, subreddit) { return __awaiter(void 0, void 0, void 0, function () {
    var redditClient, newRedditSubmissions, today, anHourAgo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                redditClient = new redditClient_1.default({ subreddit: subreddit });
                return [4 /*yield*/, redditClient.getLatestSubredditPosts()];
            case 1:
                newRedditSubmissions = _a.sent();
                today = new Date();
                anHourAgo = new Date(today.setHours(today.getHours() - 1));
                // // get all items in db
                // const dbFeedItems: AggregatedDBFeedItem[] = await knexFeed('curated_social_feed_items').where({ parent_feed_id: feedId }).select('*');
                // const nonPostedItemsArray: Submission[] =
                // newRedditSubmissions.filter((item: AggregatedDBFeedItem): boolean => !dbFeedItems.find(dbFeedItem => dbFeedItem.id === item.id));
                // const newItems = await addNewAggregatedSubredditSubmissionItemsToDB(nonPostedItemsArray);
                // return newItems;
                return [2 /*return*/, []];
        }
    });
}); };
exports.default = aggregatedFeedCheck;
