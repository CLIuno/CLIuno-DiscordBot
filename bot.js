const Discord = require("discord.js");
const PREFIX = "#"
const bot = new Discord.Client();

var fortunes = [
    "اترزع زاكر",
    "شباب لازم تعلموا براكتس",
    "انشر السيرفر "
];

var fsing = [
    "I am faaaaaaded",
    "laaaaa laaaa leeeee",
    "I have bad voice",
    "not now",
    "Despacito Quiero respirar tu cuello despacito  Deja que te diga cosas al oído Para que te acuerdes si no estás conmigo",
    "Don't give up, I won't give up"
    
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
       message.channel.sendMessage("yea what u want :)");
       break;

       case "info":
       message.channel.sendMessage("I am busy call me later");
       break;
          
       case "نصيحة":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("الرجاء معاودة الاتصال في وقت لاحق");

       break;

       case "sing":
       if (args[1]) message.channel.sendMessage(fsing[Math.floor(Math.random() * fsing.length)]);
       else message.channel.sendMessage(fsing[Math.floor(Math.random() * fsing.length)]);
       break;

       case "embed":
       var embed = new Discord.RichEmbed()
            .addField("Hello, This is TSO ", "use -_help for more info")
            .setColor(0x00FFFF)
            .setFooter("created by ☲尺௱_♡_Ӈƙ☲®")
            .setThumbnail(message.author.avatarURL)
            message.channel.sendMessage(embed);
       
       break;

       default:
       message.channel.sendMessage("invalid command")
    }
});

bot.login(process.env.BOT_TOKEN);
