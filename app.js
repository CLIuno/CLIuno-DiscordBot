const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setAFK(true);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login("token");

// bot.on("guildMemberAdd", function (member) {
//   member.guild.channels
//     .find("name", "general")
//     .sendMessage("Hey guys " + member.toString() + " is here!");
// });

// bot.on("message", function (message) {
//   if (message.author.equals(bot.user)) return;

//   if (!message.content.startsWith(PREFIX)) return;

//   var args = message.content.substring(PREFIX.length).split(" ");

//   switch (args[0].toLowerCase()) {
//     case "aio":
//       message.channel.sendMessage("https://discord.gg/jEhTRb7c");
//       break;

//     case "help":
//       message.channel.sendMessage("aio" + " say");
//       break;

//     case "say":
//       message.channel.sendMessage(message.content.replace("$say", ""));
//       break;

//     case "info":
//       var embed = new Discord.RichEmbed()
//         .addField(
//           "Hello, This is Aio cli Bot",
//           "use $help for more information"
//         )
//         .setColor(0x00ffff)
//         .setFooter("created by 尺௱♡Ӈƙ®#5990")
//         .setThumbnail(message.author.avatarURL);
//       message.channel.sendMessage(embed);
//       break;

//     default:
//       message.channel.sendMessage("Wrong Command! use $help for more info");
//   }
// });

// bot.login(process.env.BOT_TOKEN);
