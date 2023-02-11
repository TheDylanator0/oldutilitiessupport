const Discord = require('discord.js');


const client = new Discord.Client();

const prefix = '-'

client.commands = new Discord.Collection();

const fs = require('fs');

const commandFolders = fs.readdirSync('./commands');


for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on('ready', () => {
    console.log('Utilties Bot Support is online!');
    client.user.setStatus('dnd');

});




client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'prem') {
        message.delete()
        client.commands.get('prem').execute(message, args);
    } else if (command == 'inv') {
        message.delete()
        client.commands.get('inv').execute(message, args);
    } else if (command == 'ncs') {
        message.delete()
        client.commands.get('ncs').execute(message, args);
    } else if (command == 'c') {
        message.delete()
        client.commands.get('c').execute(message, args);
    } else if (command == 'cmds') {
        message.delete()
        client.commands.get('cmds').execute(message, args);
    } else if (command == 'help') {
        message.delete()
        client.commands.get('cmds').execute(message, args);
    } else if (command == 'dm'){
        client.commands.get('dm').execute(message, args);
    } else if (command == 'botoutage'){
        message.delete()
        client.commands.get('botoutage').execute(message, args);
    }
});



client.on('message', message => {
    if (message.content.includes('nigga')) {
        message.delete();
        const badwordEmbed = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3.1 and in some cases 3.3")
            .setThumbnail('https://cdn.discordapp.com/emojis/774847525378719744.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed)
        message.author.send(badwordEmbed)
    } else if (message.content.includes('niggar')) {
        message.delete();
        const badwordEmbed2 = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3.1 and in some cases 3.3")
            .setThumbnail('https://cdn.discordapp.com/emojis/774847525378719744.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed2)
        message.author.send(badwordEmbed2)
    } else if (message.content.includes('nigger')) {
        message.delete();
        const badwordEmbed3 = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3.1 and in some cases 3.3")
            .setThumbnail('https://cdn.discordapp.com/emojis/774847525378719744.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed3)
        message.author.send(badwordEmbed3)
    } else if (message.content.includes('dick')) {
        message.delete();
        const badwordEmbed4 = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3.1 and in some cases 3.3")
            .setThumbnail('https://cdn.discordapp.com/emojis/774847525378719744.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed4)
        message.author.send(badwordEmbed4)
    } else if (message.content.includes('dickhead')) {
        message.delete();
        const badwordEmbed5 = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3.1 and in some cases 3.3")
            .setThumbnail('https://cdn.discordapp.com/emojis/774847525378719744.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed5)
        message.author.send(badwordEmbed5)
    }
});

client.login('you really thought')