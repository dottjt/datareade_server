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
var snoowrap_1 = __importDefault(require("snoowrap"));
var redditClient = new snoowrap_1.default({
    userAgent: process.env.REDDIT_API_USER_AGENT,
    clientId: process.env.REDDIT_API_KEY,
    clientSecret: process.env.REDDIT_API_KEY_SECRET,
    refreshToken: process.env.REDDIT_API_REFRESH_TOKEN,
});
var RedditClient = /** @class */ (function () {
    function RedditClient(_a) {
        var subreddit = _a.subreddit;
        this.client = redditClient;
        this.subreddit = subreddit;
    }
    RedditClient.prototype.sendTextPost = function (_a) {
        var title = _a.title, text = _a.text;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.client
                    .getSubreddit(this.subreddit)
                    // @ts-ignore
                    .submitSelfpost({ title: title, text: text });
                return [2 /*return*/];
            });
        });
    };
    ;
    RedditClient.prototype.sendLinkPost = function (_a) {
        var title = _a.title, url = _a.url;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.client
                    .getSubreddit(this.subreddit)
                    // @ts-ignore
                    .submitLink({ title: title, url: url });
                return [2 /*return*/];
            });
        });
    };
    ;
    RedditClient.prototype.sendImagePost = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ;
    // https://github.com/not-an-aardvark/snoowrap/blob/master/src/objects/Submission.d.ts
    RedditClient.prototype.getLatestSubredditPosts = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client
                        .getSubreddit(this.subreddit)
                        .getNew(options)];
            });
        });
    };
    // Submission classes
    RedditClient.prototype.getLatestSubredditPostComments = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client
                        .getSubreddit(this.subreddit)
                        .getNewComments(options)];
            });
        });
    };
    RedditClient.prototype.getSubmissionLatestComments = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client
                        .getSubreddit(this.subreddit)
                        .getNewComments(options)];
            });
        });
    };
    return RedditClient;
}());
exports.default = RedditClient;
// export default class Submission extends VoteableContent<Submission> {
//   clicked: boolean;
//   comments: Listing<Comment>;
//   /** Categories for original content, e.g. "comics", "drawing_and_painting" */
//   content_categories: string[] | null;
//   contest_mode: boolean;
//   domain: string;
//   hidden: boolean;
//   hide_score: boolean;
//   is_crosspostable: boolean;
//   is_meta: boolean;
//   is_original_content: boolean;
//   is_reddit_media_domain: boolean;
//   is_robot_indexable: boolean;
//   is_self: boolean;
//   is_video: boolean;
//   link_flair_background_color: string;
//   link_flair_css_class: string | null;
//   link_flair_richtext: RichTextFlair[];
//   link_flair_template_id: string | null;
//   link_flair_text: string | null;
//   link_flair_text_color: 'dark' | 'light';
//   link_flair_type: 'text' | 'richtext';
//   locked: boolean;
//   media: Media | null;
//   media_embed: MediaEmbed;
//   media_only: boolean;
//   num_comments: number;
//   num_crossposts: number;
//   over_18: boolean;
//   parent_whitelist_status: string;
//   pinned: boolean;
//   previous_visits: number[];
//   pwls: number;
//   post_hint: string;
//   preview: { enabled: boolean; images: ImagePreview[] };
//   quarantine: boolean;
//   removal_reason: string | null;
//   /** Same content as media, except HTTPS */
//   secure_media: Media | null;
//   secure_media_embed: SecureMediaEmbed;
//   selftext: string;
//   selftext_html: string | null;
//   spam?: boolean;
//   spoiler: boolean;
//   subreddit_subscribers: number;
//   suggested_sort: Sort | null;
//   thumbnail: string;
//   thumbnail_height?: number | null;
//   thumbnail_width?: number | null;
//   title: string;
//   upvote_ratio: number;
//   url: string;
//   view_count: number | null;
//   visited: boolean;
//   whitelist_status: string;
//   wls: number;
// export default class Comment extends VoteableContent<Comment> {
//   approved: boolean;
//   body_html: string;
//   body: string;
//   collapsed_reason: any; // ?
//   collapsed: boolean;
//   controversiality: number;
//   depth: number;
//   ignore_reports: boolean;
//   /** True if comment author is the same as the Submission author */
//   is_submitter: boolean;
//   link_id: string;
//   parent_id: string;
//   removed: boolean;
//   replies: Listing<Comment>;
//   score_hidden: boolean;
//   spam: boolean;
// }
