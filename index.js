const express = require('express')
const cors = require('cors')

const app = express()


//allow CORS
app.use(cors())

//send html page
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

//get request header details
app.get('/api/whoami',(req,res) => {
    console.log(req.headers)
    res.json({
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    })
})



app.listen(3000,() => {
    console.log("Listening to port 3000")
})
