let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({activity:{name: "Amog Us"}})  
})

client.on("guildMemberAdd", member => {
  if(member.guild.id === "") {
    client.channels.cache.get("").send(`Welcome ${member}`)
  }
  const PREFIX = '^';
})
         

client.on("message", message => {
  if (message.content === "ping") {
    message.channel.send("pong")
  
  }
  if(message.content === "embed"){
    let embed = new Discord.MessageEmbed()
    .setTitle("Embed Test")
    .setDescription("I tells you to be online on this server")
    .setColor("RANDOM")
    .setFooter("Listen to me")
    message.channel.send(embed)
  }
  if (message.content === "who is intrepid") {
    message.channel.send("Some idiot who took a day to create me")
  
  }
  if (message.content === "why should i listen to you") {
    message.channel.send("I am all knowing")
  }
  
  if(message.content === "nameme") {
    let nicknames = ["hindustani bhau","carry bhai","ricardo","rick astley","bhangaarwala","BE ACTIVE","memer"]
    message.channel.send(`${nicknames[Math.floor(Math.random() *nicknames.length)]} is your new name`)
  
  }
  if(message.content === "starwars trivia") {
    let trivia = ["According to C-3PO, why wouldn't Han recognize him in The Force Awakens?", ""]
  }
  if (message.content.startsWith("^kill")) {
    let victim = message.mentions.users.first()
    if(!victim) message.reply("Mention someone to kill")
    else{
      message.channel.send(`${victim} Died f`)
    }
  }
  if (message.content.startsWith("?kick")) {
    if(message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first()
      if(!member) "messsage".channel.send("Please mention someone")
      else{
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}`)
        })
      }
    } else {
      message.reply("You don't have permission to do that")
    }
  }
if(message.content === "^doggo") {
  let image = new Discord.MessageAttachment("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.socialgoat.in%2FPR1670%2Fpublic%2Fstyles%2F1_col_gutter_portrait%2Fpublic%2F2019-12%2FFp.png%3Fnull%26h%3Dbe52fd75&imgrefurl=https%3A%2F%2Fwww.socialgoat.in%2Fstay-in%2Fscroll-through-these-doggo-accounts-next-time-you-take-5-mins-ka-work-break&tbnid=vigvN2GkXDetjM&vet=12ahUKEwjB__-FnMTvAhUFBysKHdbcBqkQMygCegUIARDTAQ..i&docid=k6n54lKybYxUdM&w=150&h=225&q=doggo&safe=active&ved=2ahUKEwjB__-FnMTvAhUFBysKHdbcBqkQMygCegUIARDTAQ")
  message.channel.send(image)
}
  // Edit from march 23
  
  if(message.content === "who is dank memer") {
    message.channel.send("A bot I strive to be like")
  }
  if (message.content === "invite") {
    message.channel.send("https://discord.gg/HY9mhd3srA")
  }
  if (message.content === "discord.gg/intrepid") {
    message.channel.send("https://discord.gg/HY9mhd3srA")
  }
  if (message.content === "artileria") {
    message.channel.send("https://www.youtube.com/watch?v=GW6GSa14xXI")
  }

  message.channel.bulkDelete("clear")
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${"clear"} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )

 



  //nothing below this line idk why
 client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
   
});
client.once('ready', () => {
 console.log('Ready!');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});

  
  
})
  
client.login("") 
