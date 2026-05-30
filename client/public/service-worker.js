// Open and close the side panel when the extension icon clicked
chrome.sidePanel
    .setPanelBehavior({openPanelOnActionClick: true})
    .catch((error) => console.error(error));