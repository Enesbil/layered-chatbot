//goals 
// 1) make basic server
// 2) make it receive messages from frontend and route to the api and respond with the api response

import express from 'express'
import generateResponse from "./utils/quickstart.js"
const app = express()

app.use(express.json()) //assumes every request is a json object

app.get('/start', (req, res) => {
    res.send({message: "Hello there, I am Allie, your friendly AI assistant. What would you like to talk about today?"})
})

app.post('/message', async (req, res) => {
    const userMessage = req.body.message
    const aiResponse = await generateResponse(userMessage)
    res.send({message: aiResponse})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})