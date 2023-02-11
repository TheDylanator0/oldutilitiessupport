const discord = require("discord.js")

module.exports = {
    name: 'botoutage',
    description: "What to do if the bot is out",
    execute(message, args){
        if(message.member.roles.cache.has('861221722685308929')){
        const premEmbed = new discord.MessageEmbed()
        .setTitle("**What do I do if Utilities or Utilities Premium is down?**")
        .setDescription("Please do not panic. Contact one of the members of the Dev Team and we will sort it out.")
        .addFields(
            {name: '**Attention!**', value: 'When a bot is down, please do not flood us with tickets about it. Doing so will result in moderation action.'}
        )
        .setThumbnail('https://cdn.discordapp.com/avatars/842751691799789638/7966f709ef975fbf90c5de20c656e517.png?size=512')
        .setTimestamp();
        message.channel.send(premEmbed)
        } else{
            message.channel.send('This command can only be ran by staff members.')
        }


    }
}