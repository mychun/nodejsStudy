const express = require('express')
const path = require('path')
const request = require('request')
const app = express()

app.use('/public', express.static(path.join(__dirname, './static')))

app.get('/cors', (req, res)=>{
    //代理
    //使用request来做代理
    //还可以使用http来实现代理
    request('http://39.97.33.178/api/movieOnInfoList?cityId=10', (err, response, body)=>{
        if(!err){
            res.send({err: 0, msg: 'request ok', data: body})
        }
    })
})

app.listen(3000, ()=>{
    console.log('server start')
})