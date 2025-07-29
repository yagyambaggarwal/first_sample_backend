require('dotenv').config()

const express = require('express');
const app = express();
const port = 4000;

app.get("/", (req, res)=>{
    res.send("Hello beta me yhan thik nhin hun");
})

app.get("/login", (req, res)=>{
    res.send("This is the login page.")
})

app.listen(process.env.PORT, ()=>{
    console.log(`The app is live at ${port}`);
})