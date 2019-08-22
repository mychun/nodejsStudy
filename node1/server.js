//引入第三方插件
const express = require('express') 
//引用第三方插件解析post请求的数据，
const bodyParser = require('body-parser')

//实例化express
const app = express() 

//在express使用body-parser
//解析application/x-www-form-urlencoded（表单提交数据）
app.use(bodyParser.urlencoded({ extended: false }))
//解析application/json（json格式）
app.use(bodyParser.json())

//创建端口，开启服务器
app.listen(3000, ()=>{
    console.log('server start')
})

//创建一个简单的api接口
//然后接口地址就是：http://localhost:3000/user/login
//get的res是res.query
app.get('/user/login', (req, res)=>{
    console.log(req.query)
    let { us, pw } = req.query
    //返回数据
    if(us === 'wy' && pw == 123){
        res.send({ err: 0, msg: 'login ok' })
    }else{
        res.send({ err: -1, msg: 'us or pw is no ok' })
    }
})

//创建一个post接口
//post的res是body 但要使用第三方插件body-parser进行解析
app.post('/user/reg', (req, res) => {
    console.log(req.body)
    let {us, ps} = req.body
    if(us == 123 && ps == 123){
        res.send({err: 0, msg: 'reg ok'})
    }else{
        res.send({err: -1, msg: 'no ok'})
    }
})