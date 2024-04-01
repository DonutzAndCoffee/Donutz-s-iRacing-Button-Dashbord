
const json_settings = readtextfile('./JavascriptExtensions/Dons_settings.json')
const settings = JSON.parse(json_settings);

function ld_GetPlayerName() {
    if ( !settings || !settings.driverName ) {
        driverName = 0
    } else {
        driverName = settings.driverName
    }
    var name = $prop('DataCorePlugin.GameData.PlayerName');
    return ld_formatName(name, driverName)
}


function returnText(screenID, buttonID)
{
	let text = settings[$prop('DataCorePlugin.CurrentGame')][screenID][buttonID].label
	return text;
}