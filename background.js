chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url && tab.url.includes("github.com") && tab.url.includes("pull")) {
    chrome.tabs.sendMessage(tabId, {
      type: "GithubPR",
    });
  }
});
