const express = require('express')
//引入数据库
const db = require('./db/connect')
//引入post的body数据解析插件
const bodyparser = require('body-parser')
//路由
const userRouter = require('./router/userRouter')

const app = express()

//使用解析
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//使用路由
app.use('/user', userRouter)


//创建服务器
app.listen(3000, ()=>{
    console.log('server start')
})