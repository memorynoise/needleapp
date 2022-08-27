window.addEventListener('DOMContentLoaded', (event) => {
    const code = new URLSearchParams(document.location.search).get("code");
    const params = {
        "type": "auth",
        "oauth_response": "ok",
        "service": "raindrop",
        "code": code
    };

    const authEvent = new CustomEvent('AuthEvent',{
        bubbles: true,
        detail: params
    });
    document.dispatchEvent(authEvent);
});