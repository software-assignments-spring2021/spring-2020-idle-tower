const express = require("express")
const router = express.Router()
//const bodyParser = require('body-parser')

router.post('/add-user', (req,res) =>{
    const username  = req.body.username;
    const email  = req.body.email;
    const password = req.body.password;
    console.log("Username:",username, "Email:", email, "Password: ",password);
    //console.log(req);
    console.log('Recived');
    res.send({done: "yes"});
});

module.exports = router;


