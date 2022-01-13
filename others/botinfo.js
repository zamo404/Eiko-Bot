const { MessageEmbed } = require("discord.js");

  const prefix = ("-");
  

module.exports = {
  name: "botinfo",
  aliases: ["binfo"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('BLACK')
    .setTitle("Roxy About")
    .setImage("")
  .setDescription(`
⭐️ **Name Bot** : <@922752221232369694>

••••••

🛠 **Creators** : <@882937556101128193>

••••••

⚡️ **Languages** : **JavaScript**


`)
    
 const disbut = require("discord-buttons")
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=922752221232369694&permissions=36703040&scope=bot');////سيرفرك

    helpEmbed.setTimestamp();

    return message.channel.send({ embed : helpEmbed , buttons : [button] }).catch(console.error);
  }
};
