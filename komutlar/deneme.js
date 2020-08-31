const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {


    /*if (member.roles.has("718222054482116658")) {
        member.send("Sa")
    }*/
const guildList = client.guilds.array();

let interval = setInterval(() => {
    //pick a random member and remove it from the list  
    let member = guildList.splice(Math.floor(Math.random() * guildList.length), 1);

        member.send("Sa")
    
    //stop the interval
    if(guildList.length == 0){ 
        clearInterval(interval);
        //here you can handle the all done logic
    }
}, 600000);
} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["aa"],
  permLevel: 0
};

exports.help = {
  name: 'aa',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};