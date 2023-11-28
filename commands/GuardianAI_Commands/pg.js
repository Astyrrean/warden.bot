const Discord = require("discord.js");
const config = require('../../config.json');
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName(`pg`)
    .setDescription(`Posts info on how to join the Xeno Strike Force Private Group`),
    permissions: 0,
    execute (interaction) {
        const returnEmbed = new Discord.EmbedBuilder()
        .setTitle('Xeno Strike Force Private Group')
        .setColor('#FF7100')
        .setThumbnail(config.icon)
        .setDescription(`**How to join the Private Group**
                            1. Open the Social Menu (Menu > Social)
                            2. On the Friends tab, use the search box to find "Xeno Strike Force".
                            3. Select the "Xeno Strike Force" and click "Request to join private group"
                            4. The Request will be automatically approved
                            5. Return to the menu, select Start > Private Group > Xeno Strike Force > Join Group`)
        .setFooter({ text: 'Joining Xeno Strike Force Private Group', iconURL: config.icon });
        interaction.reply({embeds: [returnEmbed]})
    }
}