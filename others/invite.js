const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["Invite","i","I","Inv","inv","addbot","add"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setTitle(`Invite`)
    .setDescription(`
[click here](https://discord.com/api/oauth2/authorize?client_id=912442458409943091&permissions=535029480416&scope=bot)
`)

  
   .setColor("F2254C");
   message.react("")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
