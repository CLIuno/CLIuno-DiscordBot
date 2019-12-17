const Discord = require("discord.js");
const PREFIX = "$"
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
    "روح عني أنا تعبان",
    "أفصخلك يعني؟",
    "انقلع اطلع برا",
    "كلمني بعدين دحين جالس اتفرج مسلسل",
    "كلم شوبوب يساعدوك",
    "يبن الووس "
    
];
var dx = [
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

       case "hp":
        message.channel.sendMessage("sing "+"info "+"نصيحة"+" قول"+" تهزيء"+" tso");
       break;
          
          case "قول":
       message.channel.sendMessage(message.content.replace('$قول',''));
       break;
          case "صورتي":
       message.channel.sendMessage("https://st.depositphotos.com/2098719/2604/i/950/depositphotos_26043725-stock-photo-sexy-girl-wearing-easter-bunny.jpg");
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

       case "info":
       var embed = new Discord.RichEmbed()
            .addField("Hello, This is FCIT BOT ", "use $hp for more info")
            .setColor(0x00FFFF)
            .setFooter("created by ☲尺௱_♡_Ӈƙ☲®")
            .setThumbnail(message.author.avatarURL)
            message.channel.sendMessage(embed);

       break;
          

       default:
       message.channel.sendMessage(df[Math.floor(Math.random() * df.length)])
    }
});

bot.login(process.env.BOT_TOKEN);
