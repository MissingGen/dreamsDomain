/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Cleric, called "Dreams Domain"
				This is taken from the DMs Guild website (https://www.dmsguild.com/product/194789/)
				This subclass is made by /u/MissingGen
	Code by:	MissingGen
	Date:		2020-01-20 (sheet v12.999)

*/

var iFileName = "DreamsDomain2.js";
RequiredSheetVersion(12.999);

SourceList["G"] = {
	name: "MissingGen: Dreams Domain",
	abbreviation: "G",
	group: "N/A",
	url: "https://www.reddit.com/r/UnearthedArcana/comments/epr80i/dreams_domain_send_foes_to_sleep_and_walk_in/",
	date: "2020/01/16"
};

AddSubClass("cleric", "dreams domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*dreams).*$/i,
	subname: "Dreams Domain",
	source: ["G", 0],
	spellcastingExtra: ["command", "sleep", "detect thoughts", "pass without trace", "catnap", "hypnotic pattern", "hallucinatory terrain", "phantasmal killer", "dream", "modify memory"],
	features: {
		"subclassfeature1": {
			name: "Night Walker",
			source: ["G", 0],
			minlevel: 1,
			description: "\n   " + "I gain proficiency in Stealth and martial weapons",
			skills: ["Stealth"],
			weapons: [true, true]
		},
		"subclassfeature2": {
			name: "Deep Sleep",
			source: ["G", 0],
			minlevel: 1,
			description: "\n   " + "I can make sleep target one creature, putting it to Sleep for 10 minutes until damaged or the spell ends." + "\n   " + "I add my cleric level and my Wisdom modifier to the number of hit points Sleep can affect.",

	},
	"subclassfeature3": {
		name: "Channel Divinity: Sleep Walk",
		source: ["G", 0],
		minlevel: 2,
		description: "\n   " + "As an action, I can force a creature within 60ft to make a Wisdom saving throw. If it fails, it falls asleep for 1 hour, or until it takes damage. While asleep, it continues its activity, moving around obstacles by the shortest safe path if interrupted. I can use an action to change the activity of the creature.",
		action: ["action", ""]
	},
	"subclassfeature6": {
		name: "Channel Divinity: Share Dreams",
		source: ["G", 0],
		minlevel: 6,
		description: "\n   " + "As an action, I can target an unconscious creature within 15 feet of me, entering its dreamscape. While within the dreamscape, I are incapacitated, blinded, and deafened. Over the course of 1 minute, while within the dreamscape, I can create up to one of the following effects:" + "\n   " + "Recovery: The creature is cured of all poisons and diseases, and loses 1 level of exhaustion." + "\n   " + "Peace: The creature is under the effects of calm emotions for up to 24 hours." + "\n   " + "Purify: I can end any number of curses affecting the creature. If the creature is willing I can cause its alignment to shift by one step." + "\n   " + "Restlessness: The creature gains 1 level of exhaustion, and cannot lose levels of exhaustion by resting for 24 hours." + "\n   " + "The dreamscape reflects parts of the creature's personality. I have advantage on Insight checks made to determine the creature's motivations. I can remain in the creature's dreamscape for up to 10 minutes, and I can converse with them as though I were both awake. I have advantage on Charisma checks made to influence the creature while talking within its dreamscape."
		,},
	"subclassfeature8": {
	name: "Divine Strike",
	source: ["G", 0],
	minlevel: 8,
	description: "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
	additional: levels.map(function (n) {
		if (n < 8) return "";
		return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
	}),
	calcChanges: {
		atkAdd: ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit does extra psychic damage."]}
	,"subclassfeature17": {
		name: "Narcolepsy",
		source: ["G", 0],
		minlevel: 17,
		description: "\n   " + "When I cast sleep, it can affect undead and creatures immune to being charmed." + "When I cast Sleep, I can take the maximum result twice per long rest.",
		usages : "2 per ",
		recovery : "long rest",
	}
}
}})