const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.status(200).render('pages/home')
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})