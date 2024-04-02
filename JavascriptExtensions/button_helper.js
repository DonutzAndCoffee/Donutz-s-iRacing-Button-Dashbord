const json_settings = readtextfile("./DashTemplates/Donutz's iRacing Button Dashbord/JavascriptExtensions/settings.json")
const settings = JSON.parse(json_settings);

function returnSettings() {
	return settings;
}