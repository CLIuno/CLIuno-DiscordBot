const fs = require('node:fs');
const path = require('node:path');
const { Client,Collection, Events, GatewayIntentBits } = require('discord.js');
const aio = new Client({ intents: [GatewayIntentBits.Guilds] });
commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
aio.once(Events.ClientReady, c => {
	console.log(`Logged in as ${c.user.tag} successfully!`);
});

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		aio.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

aio.login(process.env.BOT_TOKEN);

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


