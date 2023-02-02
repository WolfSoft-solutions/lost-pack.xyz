const express = require('express');
const app = express();
const fs = require('fs');
const port = 55595;
const Folders = fs. readdirSync('./api');
const memberFiles = fs. readdirSync('./views/pages/member-pages/');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('./static'));

app.get('/', (req, res) => {
  res.status(200).redirect("/home");
});

app.get('/home', (req, res) => {
  res.status(200).render('pages/home');
});

app.get('/dmca-validation.html', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/pages/dmca-validation.html');
});

app.get('/github', (req, res) => {
  res.status(200).redirect('https://github.com/The-Lost-Pack-Development');
});

app.get('/discord', (req, res) => {
  res.status(200).redirect('https://discord.com/invite/TRx7jKbSMD');
});

app.get('/privacy', (req, res) => {
  res.status(200).render('pages/privacy');
});

app.get('/terms', (req, res) => {
  res.status(200).render('pages/terms');
});

app.get('/disclaimer', (req, res) => {
  res.status(200).render('pages/disclaimer');
});

app.get('/plans', (req, res) => {
  res.status(200).render('pages/plans');
});

app.get('/login', (req, res) => {
  res.status(200).redirect('https://discord.com/api/oauth2/authorize?client_id=1004745499536015501&redirect_uri=https%3A%2F%2Fwww.lost-pack.xyz%2Fauth%2Fdiscord&response_type=token&scope=email%20identify')
})

app.get('/github', (req, res) => {
  res.status(200).redirect('https://github.com/The-Lost-Pack-Development');
});

app.get('/discord', (req, res) => {
  res.status(200).redirect('https://discord.com/invite/TRx7jKbSMD');
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
    res.status(200).render('./pages/member-pages/'+ file);
  });
}

app.get('*', (req, res) => {
  res.status(404).render('pages/404');
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
