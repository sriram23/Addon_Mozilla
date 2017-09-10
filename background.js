
function openMyPage() {
  console.log("Signing out - google account");
   browser.tabs.update({
     "url": "https://accounts.google.com/Logout?hl=en"
   });
   browser.runtime.reload();
}

function clTabs(tabs) {
  for (let tab of tabs) {
	console.log(tab.url);
  }
}
browser.browserAction.onClicked.addListener(openMyPage);
