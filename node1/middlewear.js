const express = require('express')
const app = express()

//创建自定义中间件
//所有调用的api都会先走这一段
app.use('/', (req, res, next)=>{
    console.log('middle')
    let {token} = req.query
    if(token){
        //跳到下一个api
        next()
    }else{
        res.send('no token')
    }
})

app.get('/test1', (req, res)=>{
    console.log('test1')
    res.send('test1 ok')
})

app.get('/test2', (req, res) => {
    console.log('test2')
    res.send('test2 ok')
})

app.listen(3000, ()=>{
    console.log('start server')
})