const { MessageEmbed } = require("discord.js");

  const prefix = ("-");
  

module.exports = {
  name: "invite",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('F2254C')
    .setTitle("Roxy Invite")
    .setImage("https://cdn.discordapp.com/attachments/922542879065382963/928671157144678440/20220104_204420.jpg")
  .setDescription(`
Click Here To Invite 👇🏻⭐️
`)
    
 const disbut = require("discord-buttons")
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setURL('https://discord.com/oauth2/authorize?client_id=874800680269926420&permissions=8&scope=bot');////سيرفرك

 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support')
        .setURL(`https://discord.gg/KyD4S6e2dH`);

    helpEmbed.setTimestamp();

    return message.channel.send({ embed : helpEmbed , buttons : [button,button1] }).catch(console.error);
  }
};
