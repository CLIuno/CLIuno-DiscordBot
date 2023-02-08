const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('aio')
		.setDescription('Replies with aio description'),
	async execute(interaction) {
		await interaction.reply('https://discord.gg/jEhTRb7c');
	},
};