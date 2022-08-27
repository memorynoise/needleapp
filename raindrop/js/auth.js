window.addEventListener('DOMContentLoaded', (event) => {
    browser.tabs.getCurrent().then(
        (tab) => {
            return browser.runtime.sendMessage({
                "type": "auth",
                "oauth_response": "ok",
                "service": "raindrop",
                "tab_index": tab.index
            });
        },
        (error) => {
            console.log(error);
        }
    );
});