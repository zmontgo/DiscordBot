const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env."NjY2MDMxOTY2NDQwNzgzODky.XoJOCg.65kLgU61Q6IwjhU5cSerlh7_PrY");//BOT_TOKEN is the Client Secret
