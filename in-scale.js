const majorMinorMap = [
	[0, 0, 2, 2, 4, 5, 5, 7, 7, 9, 9, 11],
	[0, 0, 2, 2, 3, 5, 5, 7, 7, 8, 8, 10],
];
var PluginParameters = [
	{
		name: "Root Note",
		type: "menu",
		valueStrings: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H", "H#"],
		defaultValue: 0,
	},
	{
		name: "Octave Offset",
		type: "lin",
		minValue: -2,
		maxValue: 2,
		defaultValue: 0,
		numberOfSteps: 4,
	},
	{
		name: "Scale Type",
		type: "menu",
		valueStrings: ["Major", "Minor"],
		defaultValue: 0,
	},
	{
		name: "Fixed Velocity",
		type: "lin",
		minValue: 0,
		maxValue: 127,
		defaultValue: 0,
		numberOfSteps: 127,
	},
	{
		name: "MIDI Channel",
		type: "lin",
		minValue: 1,
		maxValue: 16,
		defaultValue: 3,
		numberOfSteps: 15,
	},
];

function HandleMIDI(event) {
	if (event.channel === GetParameter("MIDI Channel") && typeof event.pitch === "number") {
		const octave = Math.floor(event.pitch / 12);
		const mappedNote = majorMinorMap[GetParameter("Scale Type")][event.pitch % 12];
		event.pitch = mappedNote + (GetParameter("Octave Offset") + octave) * 12 + GetParameter("Root Note");
		event.channel = 1;
		if (GetParameter("Fixed Velocity") > 0) {
			event.velocity = GetParameter("Fixed Velocity");
		}
	}
	event.send();
}
