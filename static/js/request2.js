function sendMessage() {
  const request = new XMLHttpRequest();
  request.open("POST", "https://canary.discord.com/api/webhooks/1016721322119790753/XFWJytDqVJO3ujtJB3AcHlk1bSGrJ65s1qQNdgL9CFNNmj-hi_oGR4gHIFMrBx_UvhYR");
  request.setRequestHeader('Content-type', 'application/json');

  const params = {
      avatar_url: "",
      embeds: [{
          "title": "New Request!",
          "description": `User: ${document.getElementById(`username`).value} | ${document.getElementById('D-ID').value}\nContact e-mail: ${document.getElementById('email').value}`,
          "fields": [
              { "name": `Type of request`, "value": `${document.getElementById('kind').value}` },
              { "name": `Description of the project`, "value": `${document.getElementById('description').value}`}
          ],
          "color": "14537583",
          "thumbnail": {"url": `${document.getElementById('avatar').src}`}
      }],
      content: "<@271285474516140033> New request"
  }

  request.send(JSON.stringify(params));
}