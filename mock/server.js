let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad')
app.get('/api/ad',(req,res)=>{
    res.send(ad)
})

let list = require('./home/list')
app.get('/api/list/:city/:page',(req,res)=>{
    res.send(list)
})

let info = require('./detail/info');
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info);
})

let comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    res.send(comment);
})