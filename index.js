const express = require('express');
const port = 80;
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log('conneected on '+port);
})
