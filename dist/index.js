"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _tmi = _interopRequireDefault(require("tmi.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var comandos = _interopRequireWildcard(require("./Comandos.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importamos los comandos del controller
// Inicializamos las variables de entorno
_dotenv["default"].config(); // Inicializando las optiones de configuracion para el cliente de Twitch


var options = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    //   Usuario de twitch o nombre del canal
    username: process.env.BOT_USERNAME,
    // La contraseña es el token de autenticacion del bot
    // Para conseguirlo entrar a: https://twitchapps.com/tmi/
    password: process.env.OAUTH_TOKEN
  },
  //   Nombre de los canales donde trabajara el bot
  channels: [process.env.CHANNEL_NAME]
}; // Configurando el cliente de Twitch

var client = new _tmi["default"].Client(options); // Conectandose al canal

client.connect(); // Ejecutando comando de acuerdo al mensaje del usuario que debe comenzar por '!'

client.on("message", function (channel, tags, message, self) {
  if (self || !message.startsWith("!")) return;
  comandos.Facebook(client, channel, tags, message);
  comandos.Discord(client, channel, tags, message);
  comandos.Twitter(client, channel, tags, message);
  comandos.Web(client, channel, tags, message);
  comandos.Youtube(client, channel, tags, message);
}); // Para compilar a codigo aceptado por cualquier navegador ejecutar 'npm run dist'
// Para inicializar el bot, ejecutar 'npm start' desde la consola 
// Para eliminar la carpeta dist desde la consola ejecutar 'npm run clean'
// Creado por Damian Zsiros
// Web: http://damian-zsiros.herokuapp.com/