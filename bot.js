﻿const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['556589439258722336'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`idk`,'https://www.twitch.tv/ninja')
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('.ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('.st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Mdax");
  client.user.setStatus("dnd")
   message.channel.send(` ** ${argresult} \ ** `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '0..') {
  let channel = client.channels.get('579416111922151426');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);