import express from 'express'

const app = express()

app.get('/hello', (req, res) => res.send('hello world from Cules Coding'))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`server listening on ${port}`))
