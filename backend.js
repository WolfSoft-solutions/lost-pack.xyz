const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const Folders = fs. readdirSync('./api');
const path = require('path');
const memberFiles = fs. readdirSync('./views/pages/member-pages/');

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.status(200).redirect("/home");
});

app.get('/auth/discord', (req, res) => {
	res.status(200).redirect('/request');
});

app.get('/home', (req, res) => {
  res.status(200).render('pages/home');
});

app.get('/request', (req, res) => {
  res.status(200).render('pages/request');
});

app.get('/login', (req, res) => {
  res.status(200).redirect('https://discord.com/api/oauth2/authorize?client_id=1004745499536015501&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&response_type=token&scope=identify%20email')
})

app.get('/github', (req, res) => {
  res.status(200).redirect('https://github.com/The-Lost-Pack-Development');
});

app.get('/discord', (req, res) => {
  res.status(200).redirect('https://discord.com/invite/TN7U5SvTHw');
});

for(const folder of Folders){
  const apiFiles = fs.readdirSync(`./api/${folder}`).filter(file => file.endsWith(`.json`));
  for (const file of apiFiles) {
    const defFile = file.replace('.json', '');
    app.get('/api/'+ folder + '/' + defFile, (req, res) => {
      res.status(200).sendFile(__dirname + '/api/' + folder+ `/` + file);
    });
  }
}

app.get('/members', (req, res) => {
  res.status(200).render('pages/members')
});

for (const file of memberFiles) {
  const defFile = file.replace('.ejs', '');
  app.get('/members/' + defFile, (req, res) => {
    res.status(200).render(__dirname + '/views/pages/member-pages/'+ file);
  });
}

app.get('*', (req, res) => {
  res.status(404).render('pages/404');
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});