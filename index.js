async function sayHello() {
    // Queries all tabs to find the active one
    // Can be multiple windows, so we specify currentWindow: true
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            // Document is the webpage that is currently active, so we can manipulate it
            // Insert injected code here!
            document.body.style.backgroundColor = "red";
            alert("Hello Extensions of the world!");
        }
    }).then(() => console.log("Script executed successfully"));
}

document.getElementById("changeColor").addEventListener("click", sayHello);
