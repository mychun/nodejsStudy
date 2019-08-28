const express = require('express')
const path = require('path')
const app = express()

//创建静态目录调用
//'/public'：指定访问的api链接，如果是'/'也可以省略不写
//express.static创建访问静态目录
//path.join拼接两个目录
//__dirname：获取绝对路径
//./static：当前js文件的目录下的静态文件
//在浏览器输入：http://localhost:3000/public/demo.html浏览
app.use('/public', express.static(path.join(__dirname, './static')))

app.listen(3000, ()=>{
    console.log('server start')
})
