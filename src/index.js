import tmiJS from "tmi.js";
import dotenv from "dotenv";
// Importamos los comandos del controller
import * as comandos from "./Comandos.controller";
// Inicializamos las variables de entorno
// Si no tienes el archivo .env en la raiz del proyecto debes crearlo 
// Y escribir dentro de el
// BOT_USERNAME = DiscoDuroDeRoer
// OAUTH_TOKEN = oauth:${TOKEN_BOT}
// CHANNEL_NAME = NOMBRE_DEL_CANAL_DONDE_SE_VA_A_USAR
// dotenv.config();
// Inicializando las optiones de configuracion para el cliente de Twitch
const options = {
  options: { debug: true },
  connection: { reconnect: true },
  identity: {
    //   Usuario de twitch o nombre del canal
    username: process.env.BOT_USERNAME,
    // La contraseña es el token de autenticacion del bot
    // Para conseguirlo entrar a: https://twitchapps.com/tmi/
    password: process.env.OAUTH_TOKEN
  },
  //   Nombre de los canales donde trabajara el bot
  channels: [process.env.CHANNEL_NAME]
};
// Configurando el cliente de Twitch
const client = new tmiJS.Client(options);
// Conectandose al canal
client.connect();
// Ejecutando comando de acuerdo al mensaje del usuario que debe comenzar por '!'
client.on("message", (channel, tags, message, self) => {
  if (self || !message.startsWith("!")) return;
  comandos.Facebook(client, channel, tags, message);
  comandos.Discord(client, channel, tags, message);
  comandos.Twitter(client, channel, tags, message);
  comandos.Web(client, channel, tags, message);
  comandos.Youtube(client, channel, tags, message);
});
// Para compilar a codigo aceptado por cualquier navegador ejecutar 'npm run dist'
// Para inicializar el bot, ejecutar 'npm start' desde la consola 
// Para eliminar la carpeta dist desde la consola ejecutar 'npm run clean'
// Creado por Damian Zsiros
// Web: http://damian-zsiros.herokuapp.com/
