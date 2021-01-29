// Comando para seguir a DDR en Github
export const Github =  (client, channel, tags, message) => {
  if (message.toLowerCase() === "!github") {
    client.say(
      channel,
      `@${tags.username}, Síguenos en Github: https://github.com/DiscoDurodeRoer`
    );
  }
};
// Comando para seguir a DDR en Facebook
export const Facebook =  (client, channel, tags, message) => {
  if (message.toLowerCase() === "!facebook") {
    client.say(
      channel,
      `@${tags.username}, Síguenos en Facebook: http://goo.gl/JcLshS`
    );
  }
};
// Comando para seguir a DDR en Discord
export const Discord =  (client, channel, tags, message) => {
  if (message.toLowerCase() === "!discord") {
    client.say(
      channel,
      `@${tags.username}, Unete a nuestro servidor de Discord: https://discord.gg/eXS5JZB`
    );
  }
};
// Comando para seguir a DDR en Twitter
export const Twitter =  (client, channel, tags, message) => {
  if (message.toLowerCase() === "!twitter") {
    client.say(
      channel,
      `@${tags.username}, Síguenos en Twitter: http://goo.gl/MU2Gbo`
    );
  }
};
// Comando para ver los post de DDR en el blog
export const Web =  (client, channel, tags, message) => {
  if (message.toLowerCase() === "!web") {
    client.say(
      channel,
      `@${tags.username}, Mira mi blog donde subimos posts sobre contenido de programacion y mucho mas... : https://www.discoduroderoer.es/`
    );
  }
};
// Comando para seguir a DDR en Youtube
export const Youtube =  (client, channel, tags, message) => {
  if (message.toLowerCase() === "!youtube") {
    client.say(
      channel,
      `@${tags.username}, Suscribete y activa la campanita en mi canal de yotube sobre programacion : https://www.youtube.com/user/DiscoDurodeRoer`
    );
  }
};