const discord = require("discord.js")

module.exports = {
    name: 'inv',
    description: "Tells you have to invite the bot.",
    execute(message, args){
        if(message.member.roles.cache.has('861221722685308929')){
        const premEmbed = new discord.MessageEmbed()
        .setTitle("**Click this link to invite Utilities.**")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=842751691799789638&permissions=8&scope=bot")
        .setThumbnail('https://cdn.discordapp.com/avatars/842751691799789638/7966f709ef975fbf90c5de20c656e517.png?size=512')
        .setTimestamp();
        message.channel.send(premEmbed)
        } else{
            message.channel.send('This command can only be ran by staff members.')
        }


    }
}