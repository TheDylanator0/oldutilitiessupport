const discord = require("discord.js")

module.exports = {
    name: 'c',
    description: "The end of a ticket",
    execute(message, args){
        if(message.member.roles.cache.has('861221722685308929')){
        const premEmbed = new discord.MessageEmbed()
        .setTitle("**Is there anything else we can assist you with?**")
        .setDescription("If you would like to close this ticket, then go to the ticket, and press :lock: reaction and then this reaction :white_check_mark: will appear then react to that.")
        .addFields(
            {name: '**Attention!**', value: 'If there is no response from you, the ticket will be closed.'}
        )
        .setThumbnail('https://cdn.discordapp.com/avatars/842751691799789638/7966f709ef975fbf90c5de20c656e517.png?size=512')
        .setTimestamp();
        message.channel.send(premEmbed)
        } else{
            message.channel.send('This command can only be ran by staff members.')
        }


    }
}