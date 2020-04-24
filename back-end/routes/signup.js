const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')

router.post("/post-signup", (req,res) =>{
    const username  = req.body.username;
    const email  = req.body.email;
    const password = req.body.password;
});

module.exports("router")