const express = require('express')

const app = express()


app.get('/', (req, res) => res.send('OLA MUNDO1!'))
app.listen(3000)
