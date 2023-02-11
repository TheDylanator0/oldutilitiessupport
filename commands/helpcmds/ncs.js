const discord = require("discord.js")

module.exports = {
    name: 'ncs',
    description: "Explains that this channel is not for support.",
    execute(message, args){
        if(message.member.roles.cache.has('861221722685308929')){
        const premEmbed = new discord.MessageEmbed()
        .setTitle("**Not Community Support**")
        .setDescription("This is not a community support channel. Please refrain from asking for support in this channel. Thank you!")
        .setThumbnail('https://cdn.discordapp.com/avatars/842751691799789638/7966f709ef975fbf90c5de20c656e517.png?size=512')
        .setTimestamp();
        message.channel.send(premEmbed)
        } else{
            message.channel.send('This command can only be ran by staff members.')
        }


    }
}