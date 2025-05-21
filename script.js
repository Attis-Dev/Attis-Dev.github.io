
function generate() {
    const input = document.getElementById("input").value.trim();
    const output = document.getElementById("output");

    let appId = input.match(/\d+/);
    if (!appId) {
        output.textContent = "Invalid input. Please enter a valid AppID or SteamDB URL.";
        return;
    }
    appId = appId[0];
    const content = `
"AppState"
{
    "appid" "${appId}"
    "Universe" "1"
    "StateFlags" "4"
    "installdir" "ReplaceWithGameFolder"
    "LastUpdated" "0"
    "UpdateResult" "0"
    "SizeOnDisk" "0"
    "buildid" "0"
    "LastOwner" "0"
    "BytesToDownload" "0"
    "BytesDownloaded" "0"
    "AutoUpdateBehavior" "0"
    "AllowOtherDownloadsWhileRunning" "0"
}
`;
    output.textContent = content.trim();
}
