const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if (
    message.member.roles.has("722566200357289986")
  ) {
  let [mesaj, sec] = args.join(" ").split(" - ");
  if (mesaj.length < 1)
    return message.reply("Anket için herhangi bir şey yazmalısın.");
  if (sec.length < 1) return message.reply("Kaç şık olacağını yazmalısın");
  if (sec === "1") return message.reply("Tek şıklı anket olmaz.");

  var generalChannel = "";
  const embed = new Discord.RichEmbed();
  embed.setColor("1799C0");
  embed.setTitle("ANKET");
  embed.setDescription(mesaj);
  embed.setAuthor("Anketi Yapan: " + message.author.tag);

  if (sec === "2") {
    client.channels
      .get("717079973361614859")
      .send("<@&720071230060757022>" , { embed: embed })
      .then(function(message) {
        message.react("🇦");
        message.react("🇧");
      });
  } else if (sec === "3") {
    client.channels
      .get("717079973361614859")
      .send("<@&720071230060757022>" , { embed: embed })
      .then(function(message) {
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
      });
  } else if (sec === "4") {
    client.channels
      .get("717079973361614859")
      .send("<@&720071230060757022>" , { embed: embed })
      .then(function(message) {
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
        message.react("d");
      });
  } else if (sec === "5") {
    client.channels
      .get("717079973361614859")
      .send("<@&720071230060757022>" , { embed: embed })
      .then(function(message) {
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
        message.react("🇩");
        message.react("🇪")
      });
  } else if (sec === "6") {
    client.channels
      .get("717079973361614859")
      .send("<@&720071230060757022>" , { embed: embed })
      .then(function(message) {
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
        message.react("🇩");
        message.react("🇪");
        message.react("🇫");
      
      });
  } else if (sec === "7") {
    client.channels
      .get("717079973361614859")
      .send("<@&720071230060757022>" , { embed: embed })
      .then(function(message) {
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
        message.react("🇩");
        message.react("🇪");
        message.react("🇫");
        message.react("🇬");
      
      });
  } else if (sec === "8") {
    client.channels
      .get("717079973361614859")
      .send("<@&720071230060757022>" , { embed: embed })
      .then(function(message) {
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
        message.react("🇩");
        message.react("🇪");
        message.react("🇫");
        message.react("🇬");
        message.react("🇭");
      
      });
  }else {
    message.reply("anketteki şık sayınızı doğru girmediniz. En az 2, en fazla 8 şık vermek zorundasınız.")
  }


  message.reply(
    "anketiniz alınmış ve <#690854977283031053> kanalına gönderilmiştir"
  ); }
  else {
    message.reply ("siz bir anketör değilsiniz.")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "anket",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "yaz [yazdırmak istediğiniz şey]"
};
