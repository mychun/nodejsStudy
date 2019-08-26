const express = require('express')
const path = require('path')
//引入数据库
const db = require('./db/connect')

const app = express()

//引入post的body数据解析插件
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//静态文件
app.use('/public', express.static(path.join(__dirname, './public')))

//使用路由
const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')
const fileRouter = require('./router/fileRouter')
app.use('/user', userRouter)
app.use('/food', foodRouter)
app.use('/file', fileRouter)

//创建服务器
app.listen(3000, ()=>{
    console.log('server start')
})