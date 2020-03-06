const express = require("express");

const app = express();
//const port = 3000;


app.get((req, res, next)=>{
    console.log(`${req.method} ${req.path}`);
    next();
});

app.get('/numbers/add',(req, res) => {
    console.log(req.query);
    const first = parseInt(req.query.first);
    const second = parseInt(req.query.second);

    res.send(`${first + second}`)

})

app.get('/numbers/multiply/:first/:second',(req, res) => {
    console.log(req.params);
    const first = parseInt(req.params.first);
    const second = parseInt(req.params.second);

    res.send(`${first * second}`)

})

app.listen(3000, () => console.log(`server start at port 3000`));
