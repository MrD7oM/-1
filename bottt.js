const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});


 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '512568105147432961') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '512569035347460106').send('** WELCOME TO FUN. **');
},3000);
});

client.login("NDcyODk3OTMzNzg5MTAyMDky.DtbYFw.Et3aCegBA1n1e4ytbkzfKYIid2M") 
 