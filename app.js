const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const aio = new Client({ intents: [GatewayIntentBits.Guilds] });

aio.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  aio.commands.set(command.data.name, command);
}

aio.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag} successfully!`);
});

aio.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = aio.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

aio.login(process.env.BOT_TOKEN);

// bot.on("guildMemberAdd", function (member) {
//   member.guild.channels
//     .find("name", "general")
//     .sendMessage("Hey guys " + member.toString() + " is here!");
// bot.on("message", function (message) {
//   if (message.author.equals(bot.user)) return;
//     case "info":
//       var embed = new Discord.RichEmbed()
//         .addField(
//           "Hello, This is Aio cli Bot",
//           "use $help for more information"
//         .setColor(0x00ffff)
//         .setFooter("created by 尺௱♡Ӈƙ®#5990")
//         .setThumbnail(message.author.avatarURL);
//       message.channel.sendMessage(embed);
