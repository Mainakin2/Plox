const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(msg.channel.id === '641291398393495563'){
		console.log(msg.attachments.size);
  if (msg.attachments.size <= 0) {
	  
	 msg.delete(1);
	console.log(`USUNIENTO `, msg.content);
  }
	}
});


	

client.login('nie ma');