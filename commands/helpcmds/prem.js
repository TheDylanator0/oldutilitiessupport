const discord = require("discord.js")

module.exports = {
    name: 'prem',
    description: "Explains how to purchase premium.",
    execute(message, args){
        if(message.member.roles.cache.has('861221722685308929')){
        const premEmbed = new discord.MessageEmbed()
        .setTitle("**How do I purchase premium?**")
        .setDescription("Premium costs $USD 50.00 for a lifetime plan.")
        .addFields(
            { name: '**Purchase here: https://paypal.me/prembot?locale.x=en_GB**', value: '-'},
            { name: '`Make sure you enter the correct amount, otherwise you won’t get your premium bot.`', value: '-'},
            { name: '**DM aaronnn#0001 if you purchased this, send proof.**', value: '-'},
        )
        .setThumbnail('https://cdn.discordapp.com/avatars/842751691799789638/7966f709ef975fbf90c5de20c656e517.png?size=512')
        .setFooter("We only support a lifetime plan at this time. However, this may change in the later future.")
        .setTimestamp();
        message.channel.send(premEmbed)
        } else{
            message.channel.send('This command can only be ran by staff members.')
        }


    }
}