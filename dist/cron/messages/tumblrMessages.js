"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theWritersDailyNewEpisodeTumblrText = exports.theNeverFapDeluxeDailyNewEpisodeTumblrText = void 0;
var feedUtil_1 = require("../curated/feedUtil");
// THE NEVERFAP DELUXE Daily
exports.theNeverFapDeluxeDailyNewEpisodeTumblrText = function (item) { return ("...aaaaand it's another " + feedUtil_1.retrieveRandomAdjective() + " episode from The Reade~!\n\n" + item.castboxLink + "\n\n" + item.content + "\nAvailable on Spotify, iTunes, Castbox, Google Podcasts et al.\n\nWebsite: https://theneverfapdeluxedaily.juliusreade.com\nYouTube: https://www.youtube.com/channel/UCHnPAVZax7_QMufnSF8Pc9w\nTwitter: https://twitter.com/neverfapdeluxe\nFacebook: https://facebook.com/neverfapdeluxe\nReddit: https://reddit.com/r/NeverFapDeluxe\nDiscord: https://discord.gg/wKh49a6\nInstagram: https://instagram.com/neverfap_deluxe\n"); };
// THE WRITERS DAILY
exports.theWritersDailyNewEpisodeTumblrText = function (item) { return ("...aaaaand it's another " + feedUtil_1.retrieveRandomAdjective() + " episode from The Reade~!\n\n" + item.castboxLink + "\n\n" + item.content + "\nAvailable on Spotify, iTunes, Castbox, Google Podcasts et al.\n\nWebsite: https://thewritersdaily.juliusreade.com\nYouTube: https://youtube.com/channel/UCHiMNZ86_zwW1RebKDcZEoQ\nTwitter: https://twitter.com/thewritersdaily\nFacebook: https://facebook.com/thewritersdaily\nReddit: https://reddit.com/r/TheWritersDaily\nDiscord: https://discord.gg/7QzqdP7\nInstagram: https://instagram.com/thewritersdaily\n"); };
