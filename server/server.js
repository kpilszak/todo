const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./db')

app.get('/todos', (req, res) => {
    try {
        // await
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
