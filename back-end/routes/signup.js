const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')

router.post('/add-user', (req,res) =>{
    const username  = req.body.username;
    const email  = req.body.email;
    const password = req.body.password;
    console.log(username, email, password);
    console.log('asdfafsd')
    res.end("yes");
});

module.exports = router;


