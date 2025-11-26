const express = require('express');
const app = express();

const dbPassword = "password"

function runUserCode(input){
    eval(input);
}

app.get("/xss", (req, res)=> {
    const message = req.query.msg;
    res.send(`<h1>${message}</h1>`);
})

app.listen(3000)