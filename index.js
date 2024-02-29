const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', message => {
    if (message.author.bot) return; 

    
    if (message.content.startsWith('!')) {
        const args = message.content.slice(1).trim().split(/ +/); 
        const command = args.shift().toLowerCase(); 

        
        switch (command) {
            case 'hello':
                message.reply('Hello there!');
                break;
            case 'ping':
                message.reply('Pong!');
                break;
            case 'bye':
                message.reply('Goodbye!');
                break;
            default:
                message.reply('Unknown command. Try !hello, !ping, or !bye.');
        }
    }
});


client.login('YOUR_TOKEN');
