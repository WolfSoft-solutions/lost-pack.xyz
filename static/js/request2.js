function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/676118118082281513/ZS5YcWhurzokBrKX9NgexqtxrJA5Pu2Bo4i7_JsIxC-JIbPBVhSZkcVVukGOro52rnQA");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "My Webhook Name",
      avatar_url: "https://cdn.discordapp.com/avatars/271285474516140033/6f773ebd86a348c0cdb8be32bf44985e.jpg",
      content: "The message to send"
    }

    request.send(JSON.stringify(params));
}