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
var discord_js_1 = __importDefault(require("discord.js"));
var logger_1 = __importDefault(require("../util/logger"));
var onReady = function (client, resolve) {
    return function () {
        var juliusReade = client.user;
        logger_1.default.info('Connected');
        logger_1.default.info('Logged in as: ');
        logger_1.default.info((juliusReade === null || juliusReade === void 0 ? void 0 : juliusReade.username) + ' - (' + (juliusReade === null || juliusReade === void 0 ? void 0 : juliusReade.id) + ')');
        resolve('Connected');
    };
};
var clientReady = function (client) { return new Promise(function (resolve) { return client.once('ready', onReady(client, resolve)); }); };
var connectDiscord = function (botToken) { return __awaiter(void 0, void 0, void 0, function () {
    var client;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new discord_js_1.default.Client({
                    messageCacheMaxSize: 2000,
                    messageCacheLifetime: 3600,
                    messageSweepInterval: 600 // every 10 minutes, remove all cached messages. default 0
                });
                client.login(botToken);
                // Incoming Events
                return [4 /*yield*/, clientReady(client)];
            case 1:
                // Incoming Events
                _a.sent();
                return [2 /*return*/, client];
        }
    });
}); };
var DiscordClient = /** @class */ (function () {
    function DiscordClient(_a) {
        var botToken = _a.botToken;
        this.botToken = botToken;
    }
    DiscordClient.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = this;
                    return [4 /*yield*/, connectDiscord(this.botToken)];
                case 1:
                    _a.client = _b.sent();
                    return [2 /*return*/];
            }
        }); });
    };
    DiscordClient.prototype.destroy = function () { var _a; (_a = this.client) === null || _a === void 0 ? void 0 : _a.destroy(); };
    DiscordClient.prototype.sendChannelMessageEmbed = function (_a) {
        var _b;
        var channelId = _a.channelId, messageEmbed = _a.messageEmbed;
        return __awaiter(this, void 0, void 0, function () {
            var channel, message;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ((_b = this.client) === null || _b === void 0 ? void 0 : _b.channels.fetch(channelId))];
                    case 1:
                        channel = _c.sent();
                        return [4 /*yield*/, channel.send(messageEmbed)];
                    case 2:
                        message = _c.sent();
                        console.log('discord - sendChannelMessageEmbed');
                        return [2 /*return*/, message];
                }
            });
        });
    };
    DiscordClient.prototype.sendChannelTextMessage = function (_a) {
        var _b;
        var channelId = _a.channelId, text = _a.text;
        return __awaiter(this, void 0, void 0, function () {
            var channel, message;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ((_b = this.client) === null || _b === void 0 ? void 0 : _b.channels.fetch(channelId))];
                    case 1:
                        channel = _c.sent();
                        return [4 /*yield*/, channel.send(text)];
                    case 2:
                        message = _c.sent();
                        console.log('discord - sendChannelTextMessage');
                        return [2 /*return*/, message];
                }
            });
        });
    };
    return DiscordClient;
}());
exports.default = DiscordClient;
