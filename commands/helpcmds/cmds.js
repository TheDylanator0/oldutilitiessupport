const discord = require("discord.js")

module.exports = {
    name: 'cmds',
    description: "Lists every single command.",
    execute(message, args){
        if(message.member.roles.cache.has('861221722685308929')){
        const premEmbed = new discord.MessageEmbed()
        .setTitle("**Utilties Assistant** Command List")
        .addFields(
            {name: '-prem', value: 'Tells you how to purchase Utilties Premium.'},
            {name: '-inv', value: 'Tells you how to invite Utilties.'},
            {name: '-ncs', value: 'Explains that the given channel is not for community support.'},
            {name: '-c', value: 'Use at the end of a ticket.'},
            {name: '-botoutage', value: 'Explains what to do if the bot is out.'}
        )
        .setThumbnail('https://cdn.discordapp.com/avatars/842751691799789638/7966f709ef975fbf90c5de20c656e517.png?size=512')
        .setTimestamp();
        message.channel.send(premEmbed)
        } else{
            message.channel.send('This command can only be ran by staff members.')
        }


    }
}