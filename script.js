const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";

function getword(info, tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }

  chrome.tabs.create({
    url: "https://www.verbformen.com/declension/nouns/?w=" + info.selectionText,
  });
}

chrome.contextMenus.create({
  title: "🐦 Get definition for %s",
  contexts: ["selection"],
  id: CONTEXT_MENU_ID,
});

chrome.contextMenus.onClicked.addListener(getword);
