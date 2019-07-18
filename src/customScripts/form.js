const {app, clipboard, dialog } = require('electron').remote;
const fs = require('fs');
const request = require('request');

const options = {
	url: 'https://api.github.com/repos/nvdaes/appNvdaes/releases/latest',
	headers: {
		'User-Agent': 'request'
	}
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		var releaseInfo = JSON.parse(body);
	}
}

request(options, callback);

if (releaseInfo !== undefined) {
	var releaseName = releaseInfo.name;
	var lastVersion = releaseName.substr(1);
	var link = document.createElement("A");
	link.setAttribute("href", "https://github.com/nvdaes/appNvdaes/releases/download/" + releaseName + "/Nvdaes-" + lastVersion + ".Setup.exe")
	link.innerText = "Descargar última versión (" + lastVersion + ")";
	document.getElementById("release").appendChild(link);
} else { document.getElementById("release").innerText = "No se ha podido encontrar la última versión de este programa."; }


let addons = [
	{id: "developerToolkit", summary: "Developer Toolkit", author: "Andy Borka"},
	{id: "addonsHelp", summary: "Documentación de complementos", author: "Zougane, Rémy, Abdel, Rui Fontes, con la colaboración de Ângelo Abrantes y James Scholes"},
	{id: "charInfo", summary: "Información del carácter", author: "Cyrille Bougot"},
	{id: "wordCount", summary: "Complemento para contar elementos del texto seleccionado", author: "rui.fontes@tiflotecnia.com"},
	{id: "ImageDescriber", summary: "Image Describer", author: "Oliver Edholm"},
	{id: "Weather_Plus", summary: "Weather Plus", author: "Adriano Barbieri"},
	{id: "browsernav", summary: "BrowserNav", author: "Tony Malykh"},
	{id: "outlookExtended", summary: "Outlook extended", author: "Cyrille Bougot, Ralf Kefferpuetz"},
	{id: "textnav", summary: "TextNav", author: "Tony Malykh"},
	{id: "AudioChart", summary: "AudioChart", author: "Tony Malykh"},
	{id: "BluetoothAudio", summary: "BluetoothAudio", author: "Tony Malykh"},
	{id: "calibre", summary: "Calibre", author: "Javi Domínguez"},
	{id: "toolbarsExplorer", summary: "ToolbarsExplorer", author: "Alberto Buffolino"},
	{id: "inputLock", summary: "Input Lock", author: "José Manuel Delicado"},
	{id: "addonUpdater", summary: "Add-on Updater", author: "Joseph Lee"},
	{id: "access8math", summary: "Access8Math", author: "Woody Tseng"},
	{id: "textInformation", summary: "Text Information", author: "Carter Temm"},
	{id: "sentenceNav", summary: "SentenceNav", author: "Tony Malykh"},
	{id: "brailleExtender", summary: "BrailleExtender", author: "André-Abush Clause y colaboradores"},
	{id: "indentNav", summary: "IndentNav", author: "Tony Malykh"},
	{id: "mozillaScripts", summary: "Mejoras en aplicaciones de Mozilla", author: "Javi Domínguez"},
	{id: "sayCurrentKeyboardLanguage", summary: "sayCurrentKeyboardLanguage", author: "Abdel, Noelia"},
	{id: "objLocationTones", summary: "Object Location Tones", author: "Joseph Lee"},
	{id: "enhancedAria", summary: "Enhanced Aria", author: "José Manuel Delicado"},
	{id: "lambda", summary: "Complemento de LAMBDA para NVDA", author: "Alberto Zanella y el equipo de lambda-nvda"},
	{id: "speech_history", summary: "Speech History", author: "James Scholes"},
	{id: "speakPasswords", summary: "Speak Passwords", author: "Tyler Spivey"},
	{id: "clipspeak", summary: "Clipspeak", author: "Damien Garwood"},
	{id: "reviewCursorCopier", summary: "Review Cursor Copier", author: "Tuukka Ojala"},
	{id: "AudioThemes3D", summary: "Audio Themes", author: "Musharraf Omer y otros"},
	{id: "classicSelection", summary: "Classic Selection", author: "Tyler Spivey"},
	{id: "objPad", summary: "ObjPad", author: "Joseph Lee, Cleverson Uliana y otros"},
	{id: "switchSynth", summary: "Switch synth", author: "Tyler Spivey"},
	{id: "reportSymbols", summary: "Report Symbols", author: "Noelia Ruiz Martínez"},
	{id: "stationPlaylist", summary: "StationPlaylist", author: "Geoff Shang, Joseph Lee y otros colaboradores"},
	{id: "toneMaster", summary: "Tone Master", author: "Hrvoje Katić"},
	{id: "mp3DirectCut", summary: "mp3DirectCut", author: "Abdel, Rémy, Abdellah zineddine, Jean-François COLAS"},
	{id: "crashHero", summary: "Crash Hero", author: "Derek Riemer"},
	{id: "tipOfTheDay", summary: "Tip of the Day", author: "Derek Riemer"},
	{id: "goldenCursor", summary: "Golden Cursor", author: "salah atair, Joseph Lee"},
	{id: "dayOfTheWeek", summary: "Day of the week", author: "Abdel, Noelia"},
	{id: "vlc", summary: "VLC Media Player", author: "Javi Domínguez"},
	{id: "wintenApps", summary: "Windows 10 App Essentials", author: "Joseph Lee, Derek Riemer y otros usuarios de Windows 10"},
	{id: "nvdaremote", summary: "NVDA Remote Support", author: "Christopher Toth, Tyler Spivey"},
	{id: "teamtalk", summary: "TeamTalk Classic", author: "Doug Lee"},
	{id: "easyTableNavigator", summary: "Easy Table Navigator", author: "Joseph Lee"},
	{id: "clock", summary: "Complemento reloj y calendario para NVDA", author: "Hrvoje Katić, Abdel y contribuidores de NVDA"},
	{id: "newfon", summary: "Newfon", author: "Sergey Shishmintzev"},
	{id: "dualvoice", summary: "Dual Voice", author: "Mahmood Taghavi"},
	{id: "clipContentsDesigner", summary: "Clip Contents Designer", author: "Noelia, Abdel"},
	{id: "enhancedTouchGestures", summary: "Enhanced Touch Gestures", author: "Joseph Lee"},
	{id: "bitChe", summary: "Bit Che", author: "Alberto Zanella, Alberto Buffolino, otros colaboradores"},
	{id: "readFeeds", summary: "Read Feeds", author: "Noelia Ruiz Martínez, Mesar Hameed"},
	{id: "goldwave", summary: "Goldwave", author: "Joseph Lee, colaboradores de NVDA"},
	{id: "emoticons", summary: "Emoticons", author: "Chris Leo, Noelia Ruiz Martínez, Mesar Hameed, Francisco Javier Estrada Martínez"},
	{id: "eMule", summary: "eMule", author: "Noelia, Chris, Alberto"},
	{id: "focusHighlight", summary: "Focus Highlight", author: "Takuya Nishimoto"},
	{id: "noBeepsSpeechMode", summary: "NoBeepsSpeechMode", author: "Alberto Buffolino"},
	{id: "virtualRevision", summary: "Virtual Review", author: "Rui Batista y equipo de complementos de NVDA"},
	{id: "placeMarkers", summary: "placeMarkers", author: "Noelia, Chris"},
	{id: "controlUsageAssistant", summary: "Control Usage Assistant", author: "Joseph Lee"},
	{id: "resourceMonitor", summary: "Resource Monitor", author: "Alex Hall, Joseph Lee, beqa gozalishvili, Tuukka Ojala, Ethin Probst y otros"},
	{id: "unicodeBrailleInput", summary: "UnicodeBrailleInput", author: "Mesar Hameed, Patrick Zajda"},
	{id: "ocr", summary: "OCR", author: "NV Access Limited y otros colaboradores"},
	{id: "extendedWinamp", summary: "extendedWinamp", author: "Hrvoje Katic y el equipo de complementos de NVDA"},
	{id: "dropbox", summary: "dropbox", author: "Patrick Zajda, Filaos y otros colaboradores"},
	{id: "systrayList", summary: "systrayList", author: "Rui Fontes, Rui Batista, Joseph Lee, colaboradores de la comunidad de NVDA"}
]

document.title = app.getName() + " " + app.getVersion();

const output = document.getElementById("data")

function buildForm() {
	for (var addon of addons) {
		var input = document.createElement("INPUT");
		input.setAttribute("id", addon.id);
		input.setAttribute("name", addon.id);
		input.setAttribute("placeholder", addon.id);
		if (addon.comment !== undefined) input.setAttribute("value", addon.comment);
		var label = document.createElement("LABEL");
		label.setAttribute("for", addon.id);
		label.innerText = addon.summary;
		label.appendChild(input);
		var p = document.createElement("P");
		p.appendChild(label);
		output.appendChild(p);
	}
}

buildForm();

const shell = require('electron').shell
const links = document.querySelectorAll('a[href]')

Array.prototype.forEach.call(links, function (link) {
	const url = link.getAttribute('href')
	if (url.indexOf('http') === 0) {
		link.addEventListener('click', function (e) {
			e.preventDefault()
			shell.openExternal(url)
		})
	}
});

function updateAddons() {
	for (var addon of addons) {
		if (document.getElementById(addon.id).value !== undefined) addon.comment = document.getElementById(addon.id).value;
	}
}

const open = document.getElementById("abrir");

open.addEventListener('click', () => {
	dialog.showOpenDialog({filters: [{name: 'json', extensions: ['json']}]}, function(fileNames) {
		if (fileNames === undefined) return;
		var fileName = fileNames[0];
		fs.readFile(fileName, 'utf-8', function (err, data) {
			if (err) dialog.showErrorBox("Error", err.message);
			addons = JSON.parse(data);
			for (var p of document.querySelectorAll("div p")) {
				p.remove();
			}
			buildForm();
		});
		document.getElementById("crear").innerText += " " + fileName;
	});
});

const save = document.getElementById("guardar");

save.addEventListener('click', () => {
	dialog.showSaveDialog({filters: [{name: 'json', extensions: ['json']}]}, function(fileName) {
		if (fileName === undefined) return;
		updateAddons();
		fs.writeFile(fileName, JSON.stringify(addons), function (err) {
			if (err) dialog.showErrorBox("Error", err.message);
		});
	});
});

const markdown = document.getElementById("ver");
const aside = document.createElement("ASIDE");
const addonLink = "https://addons.nvda-project.org/addons/";
document.getElementById("tabla").appendChild(aside);

markdown.addEventListener('click', () => {
	updateAddons();
	var text = "| Complemento | Autor/mantenido por | Enlace | Comentario |\r\n| --- | --- | --- | ---|\r\n";
	for (var addon of addons) {
		if (addon.comment.trim().length === 0) continue;
		text += "| " + addon.summary + " | " + addon.author + " | " + addonLink + addon.id + " | " + addon.comment + " |\r\n";
	}
	if (text.length === 87) return
	aside.innerText = text;
	var wikiLink = "Tabla de complementos en HTML:\r\nhttps://nvdaes.groups.io/g/lista/wiki/Actualizaci%C3%B3n-de-complementos-%23ComunidadInternacional\r\n\r\n";
	clipboard.writeText(wikiLink + text + "\r\nTabla creada con aplicación Nvdaes:\r\nhttps://github.com/nvdaes/appNvdaes\r\n" + getLastVersion());
});
