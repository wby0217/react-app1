let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad')

app.get('/api/ad',(req,res)=>{
    res.send(ad)
})

let list = require('./home/list')

app.get('/api/list/:city/:page',(req,res)=>{
    console.log(req.param.city)
    console.log(req.param.page)
    res.send(list)
})