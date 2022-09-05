const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const Folders = fs. readdirSync('./api');

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.status(200).redirect("/home");
});

app.get('/home', (req, res) => {
  res.status(200).render('pages/home');
});

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

app.get('*', (req, res) => {
  res.status(404).render('pages/404');
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});