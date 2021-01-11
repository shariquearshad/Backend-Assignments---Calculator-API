const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.post('/add',(req,res)=>{
    let num1=parseInt(req.body.num1);
    let num2=parseInt(req.body.num2);
    let sum=num1+num2;
    res.send(""+sum);
    
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;