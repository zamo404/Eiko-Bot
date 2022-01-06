const { MessageEmbed } = require("discord.js");

  const prefix = ("-");
  

module.exports = {
  name: "support",
  aliases: ["sprt"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('BLACK')
    .setTitle("Roxy Invite")
    .setImage("")
  .setDescription(`
❕ **Click Here To Support** ❗️
`)
    
 const disbut = require("discord-buttons")
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support')
        .setURL('https://discord.gg/9MQNeSCWHa');////سيرفرك

    helpEmbed.setTimestamp();

    return message.channel.send({ embed : helpEmbed , buttons : [button] }).catch(console.error);
  }
};
