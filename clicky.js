global.clickyToken="";

const strings = require('locutus/php/strings');
const fs = require('fs');
const { Client, Intents } = require('discord.js');
const Clicky = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

Clicky.once('ready', () => {
    console.log('Why, I never!');
});

Clicky.on('message', msg => {


});

Clicky.on('message', async msg => {
  
    if(msg.content === 'clicky') {
      msg.reply('Yes?');
    }

    if(strings.stristr(msg.content,'abc123')) {
      msg.reply("You typed in the secret message");
    }

    switch (msg.content) {
      case "shut up":
        msg.reply("Why, I never!");
        break;
      case "ping":
        msg.reply("Pong!");
        break;

      //our meme command below
      case "!meme":
        msg.channel.send("Here's your meme!"); //Replies to user command
        // const img = await getMeme(); //fetches an URL from the API
        // msg.channel.send(img); //send the image URL
        break;
     }
  })


fs.readFile("../../../../discord-clicky-token.txt", (error,data) => {
    if(error) {
        throw error;
    }
    clickyToken=data.toString().trim();
    Clicky.login(clickyToken);
});

