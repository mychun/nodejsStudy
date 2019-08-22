const express = require('express')
const bodyParser = require('body-parser')
//引入user的api路由
const userRouter = require('./router/userRouter')
//引入food的api路由
const foodRouter = require('./router/foodRouter')
const app = express()

//使用post的请求数据解析
//解析application/x-www-form-urlencoded（表单提交数据）
app.use(bodyParser.urlencoded({ extended: false }))
//解析application/json（json格式）
app.use(bodyParser.json())

//使用api路由
app.use('/user', userRouter)
app.use('/food', foodRouter)

app.listen(3000, ()=>{
    console.log('server start')
})