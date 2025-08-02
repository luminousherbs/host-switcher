async function get(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

let inject;

// executeScript requires code to be passed as a string, so we must use fetch instead of import
get("content.js").then((result) => {
    inject = result;
})

browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        code: inject,
    });
});