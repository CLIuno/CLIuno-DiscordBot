// TODO : Add a greeting command

const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('greeting')
		.setDescription('Replies with aio description'),
	async execute(interaction) {
		await interaction.reply('https://discord.gg/jEhTRb7c');
	},
};