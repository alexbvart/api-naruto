const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema(
	{
		header: {
			name: String,
			headerImages: [String],
			alias: String,
			affiliation: String,
			affiliationIcon: String,
			rank: String,
		},
		info: {
			intro: {
				title: String,
				paragraph: [String],
				images: [
					{
						url: String,
						description: String,
					},
				]
			},
			name: {
				Kanji: String,
				Romaji: String,
				Alias: [String],
			},
			information: {
				"Nacimiento": String,
				"Género": String,
				"Edad": [String],
				"Altura" :[String],
				"Peso": [String],
				"Grupo Sanguineo" : String,
				"Clasificación": [String],
				"Habilidad única": [String],
				"Kekkei Genkai": [String],
				"Anterior Bestia con Cola": String,
				"Bestia con Cola": [String],
				"Ocupación":[String],
				"Afiliación": [String],
				"Equipo": [String],
				"Compañeros":[String],
				"Clan": [String],
			},
			ninjaRank: {
				"Rango Ninja": [String],
				"Registro Ninja": String,
				"Graduación de la academia": String,
				"Ascenso a chūnin": String,
			},
			family:{
				"Familia":[String],
			},
			"natureOfTheChakra":{
				"Naturaleza del chacra":[String],
			},
			techniques:{
				"Técnicas":[String]
			},
			tools:{
				"Herramientas":[String],
			},
			creation: {
				title: String,
				paragraph: [String],
				images: [
					{
						url: String,
						description: String,
					},
				]
			}
		},
		appearance: {
			appearance: {
				title: String,
				paragraph: [String],
				images: [
					{
						url: String,
						description: String,
					},
				]
			},
			personality: {
				title: String,
				paragraph: [String],
				images: [
					{
						url: String,
						description: String,
					},
				]
			}
		},
		history: {
			history: {
				title: String,
				paragraph: [String],
				images: [
					{
						url: String,
						description: String,
					},
				]
			},
			partOne: [
				{
					title: String,
					paragraph: [String],
					images: [
						{
							url: String,
							description: String,
						},
					]
				},
			],
			partTwo: [
				{
					title: String,
					paragraph: [String],
					images: [
						{
							url: String,
							description: String,
						},
					]
				},
			],
			partChange: [
				{
					title: String,
					paragraph: [String],
					images: [
						{
							url: String,
							description: String,
						},
					]
				},
			],
			partThree: [
				{
					title: String,
					paragraph: [String],
					images: [
						{
							url: String,
							description: String,
						},
					]
				},
			],
		},
		skills: [
			{
				title: String,
				paragraph: [String],
				images: [
					{
						url: String,
						description: String,
					},
				]
			},
		]
	},
    {
        timestamps: true,
        versionKey: false,
    }
);

const Character = mongoose.model('Character',CharacterSchema);

module.exports = Character;