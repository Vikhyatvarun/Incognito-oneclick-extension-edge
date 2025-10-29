chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    incognito: true,
    state: "maximized"   // 🔥 This makes the window full screen
  });
});
