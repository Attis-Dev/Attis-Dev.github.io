function generateManifest() {
  const appid = document.getElementById("appid").value.trim();
  if (!appid) {
    alert("Kérlek adj meg egy AppID-t.");
    return;
  }

  const manifest = `"AppState"
{
  "AppID"  "${appid}"
  "Universe" "1"
  "installdir" "${appid}"
  "StateFlags" "1026"
}
`;

  document.getElementById("result").textContent = manifest;

  const blob = new Blob([manifest], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.getElementById("downloadLink");
  link.href = url;
  link.download = `appmanifest_${appid}.acf`;
  link.style.display = "inline-block";
  link.textContent = "Letöltés";
}
