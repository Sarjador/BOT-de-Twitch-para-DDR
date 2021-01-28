"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Youtube = exports.Web = exports.Twitter = exports.Discord = exports.Facebook = exports.Github = void 0;

// Comando para seguir a DDR en Github
var Github = function Github(client, channel, tags, message) {
  if (message.toLowerCase() === "!github") {
    client.say(channel, "@".concat(tags.username, ", S\xEDguenos en Github: https://github.com/DiscoDurodeRoer"));
  }
}; // Comando para seguir a DDR en Facebook


exports.Github = Github;

var Facebook = function Facebook(client, channel, tags, message) {
  if (message.toLowerCase() === "!facebook") {
    client.say(channel, "@".concat(tags.username, ", S\xEDguenos en Facebook: http://goo.gl/JcLshS"));
  }
}; // Comando para seguir a DDR en Discord


exports.Facebook = Facebook;

var Discord = function Discord(client, channel, tags, message) {
  if (message.toLowerCase() === "!discord") {
    client.say(channel, "@".concat(tags.username, ", Unete a nuestro servidor de Discord: https://discord.gg/eXS5JZB"));
  }
}; // Comando para seguir a DDR en Twitter


exports.Discord = Discord;

var Twitter = function Twitter(client, channel, tags, message) {
  if (message.toLowerCase() === "!twitter") {
    client.say(channel, "@".concat(tags.username, ", S\xEDguenos en Twitter: http://goo.gl/MU2Gbo"));
  }
}; // Comando para ver los post de DDR en el blog


exports.Twitter = Twitter;

var Web = function Web(client, channel, tags, message) {
  if (message.toLowerCase() === "!web") {
    client.say(channel, "@".concat(tags.username, ", Mira mi blog donde subimos posts sobre contenido de programacion y mucho mas... : https://www.discoduroderoer.es/"));
  }
}; // Comando para seguir a DDR en Youtube


exports.Web = Web;

var Youtube = function Youtube(client, channel, tags, message) {
  if (message.toLowerCase() === "!youtube") {
    client.say(channel, "@".concat(tags.username, ", Suscribete y activa la campanita en mi canal de yotube sobre programacion : https://www.youtube.com/user/DiscoDurodeRoer"));
  }
};

exports.Youtube = Youtube;