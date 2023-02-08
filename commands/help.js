const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with help information'),
	async execute(interaction) {
		await interaction.reply('please use $aio for more information');
	},
};