const { MessageEmbed } = require("discord.js");

  const prefix = ("-");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('F2254C')
    .setTitle("Help Command")
    .setImage("")
  .setDescription(`
 Everyone
\`help\` , \`invite\` , \`prefix\` , \`ping\` 
\`uptime\` , \`botinfo\` , \`serverinfo\`
 Music
\`play\` , \`skip\` , \`skipto\` , \`leave\`
\`remove\` , \`queue\` , \`filter\` , \`loop\` 
\`lyrics\` , \`radio\` , \`search\` , \`shuffle\`
\`np\` , \`pause\` , \`resume\`
 Filter
\`bassboost\` , \`8D\` , \`vaporwave\` , \`tremolo\`
\`phaser\` , \`subboost\` , \`nightcore\` , \`pulsator\`
\`vibrato\` , \`clear\` , \`surrounding\`


`)
    
 const disbut = require("discord-buttons")
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=922752221232369694&permissions=36703040&scope=bot');////سيرفرك

 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support')
        .setURL(`https://discord.gg/9MQNeSCWHa`);

    helpEmbed.setTimestamp();

    return message.channel.send({ embed : helpEmbed , buttons : [button,button1] }).catch(console.error);
  }
};
