const { MessageEmbed } = require("discord.js");

  const prefix = ("-");
  

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('BLACK')
    .setTitle("Eiko Invite")
    .setImage("")
  .setDescription(`
 **Click Here To Invite**
`)
    
 const disbut = require("discord-buttons")
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=981695944552755250&permissions=8&scope=bot');////Invite

    helpEmbed.setTimestamp();

    return message.channel.send({ embed : helpEmbed , buttons : [button] }).catch(console.error);
  }
};
