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
var const_1 = require("../../../const");
var curatedFeedCheck10Minutes_1 = __importDefault(require("../../curatedFeedCheck10Minutes"));
var nfdSocialFeed_1 = require("../../../data/feeds/nfdSocialFeed");
var socialFeedsUtil_1 = __importDefault(require("./socialFeedsUtil"));
var clientUtil_1 = require("../../../social/clientUtil");
var neverFapDeluxeSocialFeed = function () { return __awaiter(void 0, void 0, void 0, function () {
    var itemsToPost, socialClients, _i, itemsToPost_1, item, _a, _b, itemSocial;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, curatedFeedCheck10Minutes_1.default({
                    feedId: const_1.NEVERFAP_DELUXE_SOCIAL_FEED_ID,
                    items: nfdSocialFeed_1.feedSocialNFDList
                })];
            case 1:
                itemsToPost = _c.sent();
                if (!(itemsToPost.length > 1)) return [3 /*break*/, 8];
                return [4 /*yield*/, clientUtil_1.neverFapDeluxeSocialClient()];
            case 2:
                socialClients = _c.sent();
                _i = 0, itemsToPost_1 = itemsToPost;
                _c.label = 3;
            case 3:
                if (!(_i < itemsToPost_1.length)) return [3 /*break*/, 8];
                item = itemsToPost_1[_i];
                _a = 0, _b = item.socials;
                _c.label = 4;
            case 4:
                if (!(_a < _b.length)) return [3 /*break*/, 7];
                itemSocial = _b[_a];
                return [4 /*yield*/, socialFeedsUtil_1.default(item, itemSocial, socialClients)];
            case 5:
                _c.sent();
                _c.label = 6;
            case 6:
                _a++;
                return [3 /*break*/, 4];
            case 7:
                _i++;
                return [3 /*break*/, 3];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.default = neverFapDeluxeSocialFeed;
