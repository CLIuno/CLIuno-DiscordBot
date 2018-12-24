const Discord = require("discord.js");
const PREFIX = "#"
const bot = new Discord.Client();

var fortunes = [
   "اعمل براكتس",
    "اترزع زاكر",
    "خليك هاوي",
    "لازم تحب البرمجة",
    "لا تخلي الهواة احسن منك",
    "حل تمارين الكتاب"
];

var fsing = [
    "I am faaaaaaded",
    "laaaaa laaaa leeeee",
    "I have bad voice",
    "not now",
    "Despacito Quiero respirar tu cuello despacito  Deja que te diga cosas al oído Para que te acuerdes si no estás conmigo",
    "Don't give up, I won't give up"
    
];

var df = [
    "مخك تعبان",
    "كأنك زي الكرسي اللي قاعد عليه",
    "انقلع اطلع برا",
    "شكلك تبغى ترسب",
    "خلي الجوال ينفعك",
    "قوم يا حثالة ذاكر"
    
];

bot.on("ready", function(){
    console.log("Ready");
    bot.user.setGame('尺௱♡Ӈƙ ❤','https://www.twitch.tv/RMxHK');
});

bot.on("guildMemberAdd", function(member){
    member.guild.channels.find("name", "general").sendMessage("yoo guys " + member.toString() + " is here !");
});

bot.on("message", function(message){
     if (message.author.equals(bot.user)) return;
                                                                                                                                          
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
       
       case "tso":
       message.channel.sendMessage("https://discord.gg/7d4tYg2");
       break;

       case "info":
       message.channel.sendMessage("انا دحين مشغول اذا تبغا شي مني قابلني فساعاتي المكتبية");
       break;
          
          case "قول":
       message.channel.sendMessage(message.content.replace('#قول',''));
       break;
          
   case "نصيحة":
       if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
       else message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
       break;
          case "تهزيء":
       if (args[1]) message.channel.sendMessage(df[Math.floor(Math.random() * df.length)]);
       else message.channel.sendMessage(df[Math.floor(Math.random() * df.length)]);
       break;

       case "sing":
       if (args[1]) message.channel.sendMessage(fsing[Math.floor(Math.random() * fsing.length)]);
       else message.channel.sendMessage(fsing[Math.floor(Math.random() * fsing.length)]);
       break;

       case "embed":
   const embed = new Discord.RichEmbed()
                .setAuthor(`Hibiki | 響`, client.user.avatarURL)
                .addField(`Version`, `1.0`, true)
                .addField(`Node JS`, `8.11.3`, true)
                .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
                .addField(`Uptime`, `${uptime}`, true)
                .addField(`Servers`, `${client.guilds.size}`, true)
                .addField(`Users`, `${client.users.size}`, true)
                .addField(`Website`, `[hibikimoe.xyz](https://hibikimoe.xyz/)`, true)
                .addField(`Discord`, `[hibikimoe.xyz/discord](https://discord.gg/NNwzMm)`, true)
                .addField(`Invite`, `[Not available yet](https://discord.gg/NNwzMm)`, true)
                .addField(`Developer`, `Steve2312#0431`, true)
                .setFooter("Prefix: ! | This bot is still under construction", "https://a.ppy.sh/5414370_1530431526.jpeg")
                .setTimestamp()
                .setColor(0xFF0092);
            message.channel.send(embed);
       
       break;
          

       default:
       message.channel.sendMessage("روح عني أنا تعبان")
    }
});

bot.login(process.env.BOT_TOKEN);
