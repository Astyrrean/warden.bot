const Discord = require("discord.js");
const config = require('../../config.json');
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName(`tpn`)
    .setDescription(`Thargoid Pulse Neutralizer`),
    permissions: 0,
    execute (interaction) {
        const returnEmbed = new Discord.EmbedBuilder()
        .setTitle('Thargoid Pulse Neutralizer')
        .setColor('#FF7100')
        // .setAuthor({name: config.botAuthor,iconURL: config.icon})
        .setThumbnail(config.icon)
        .setDescription('Allows you to cross the repulsion wave in Thargoid Maelstroms; Also protects against interceptor shutdown fields and Banshee shutdown missiles.')
        .addFields(
            { name: "**Purspose/Effects**:", value: `- Bind to a firegroup and press and hold to use; Note: will drain SYS capacitor and stop working once SYS is empty' \n- Alternatively, use Shutdown Field Neutralizer keybind to fire \n- Only protects your ship, unlike the 3km range of the Shutdown Field Neutralizer`, inline: false },
            { name: "**Where to Buy**:", value: `- Any Rescue Megaship 'Technology Broker'`, inline: false },
            { name: "**Materials Cost**:", value: `
                - 1 Unclassified Relic \n- 5 Massive Energy Surge Analytics \n- 5 Propulsion Elements \n- 5 Sensor Fragments
            `}
            )
        interaction.reply({embeds: [returnEmbed]})
    }
}