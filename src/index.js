import express from 'express'

import print from 'utils/print'

const app = express()

print()

const PORT = process.env.PORT || 8000

app.get('/subscribe', (req, res) =>
	res.send('Like, share and Subscribe to Cules Coding')
)

app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`)
})
