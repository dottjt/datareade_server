"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theWritersDailyNewEpisodeDiscordEmbed = exports.theNeverFapDeluxeDailyNewEpisodeDiscordEmbed = void 0;
var discord_js_1 = require("discord.js");
var feedUtil_1 = require("../curated/feedUtil");
// THE NEVERFAP DELUXE DAILY
exports.theNeverFapDeluxeDailyNewEpisodeDiscordEmbed = function (item) { return new discord_js_1.MessageEmbed()
    // .setTitle(item.title)
    .setDescription("Another " + feedUtil_1.retrieveRandomAdjective() + " episode from The Reade:tm: :v:\n\nAvailable on Spotify, iTunes, Castbox, Google Podcasts et al.\n\nWebsite: https://theneverfapdeluxedaily.juliusreade.com\nYouTube: https://www.youtube.com/channel/UCHnPAVZax7_QMufnSF8Pc9w\nTwitter: https://twitter.com/neverfapdeluxe\nFacebook: https://facebook.com/neverfapdeluxe\nReddit: https://reddit.com/r/NeverFapDeluxe\nInstagram: https://instagram.com/neverfap_deluxe\n"); };
// THE WRITERS DAILY
exports.theWritersDailyNewEpisodeDiscordEmbed = function (item) { return new discord_js_1.MessageEmbed()
    // .setTitle(item.title)
    .setDescription("Another " + feedUtil_1.retrieveRandomAdjective() + " episode from The Reade:tm: :v:\n\nAvailable on Spotify, iTunes, Castbox, Google Podcasts et al.\n\nWebsite: https://thewritersdaily.juliusreade.com\nYouTube: https://youtube.com/channel/UCHiMNZ86_zwW1RebKDcZEoQ\nTwitter: https://twitter.com/thewritersdaily\nFacebook: https://facebook.com/thewritersdaily\nReddit: https://reddit.com/r/TheWritersDaily\nInstagram: https://instagram.com/thewritersdaily\n"); };
