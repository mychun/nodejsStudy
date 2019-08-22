//连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/1902', { useNewUrlParser: true })

//数据库的连接对象
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db ok')
});

//scheme对象

//创建一个和集合相关的schema对象，类似表头
//let Schema = mongoose.Schema
//创建并获取schema对象
let userSchema = new mongoose.Schema({
    us: {type:String, required: true},
    ps: {type:String, required: true},
    age: Number,
    sex: {type:Number, default: 0}
})

//将schema对象转化为数据模型
//这样就可以进行增删改查操作

//该数据对象和集合关联('集合名', schema对象)
let User = mongoose.model('users', userSchema)

//操作数据库

//增
// User.insertMany({us: 'liyi', ps: '123', age: 17})
// .then((data)=>{
//     console.log(data)
//     console.log('插入成功')
// })
// .catch((err)=>{
//     console.log('插入失败')
// })

//查询
// User.find({age:16})
// .then((data)=>{
//     console.log(data)
//     console.log('查询成功')
// })
// .catch((err)=>{
//     console.log('查询失败')
//     console.log('err: ', err)
// })

//修改操作
// User.updateOne({age:16}, {sex: 1})
// .then((data)=>{
//     console.log(data)
//     console.log('修改成功')
// })
// .catch((err)=>{
//     console.log('修改失败')
//     console.log('err: ', err)
// })

//删除操作
// User.remove({age: 17})
// .then((data)=>{
//     console.log(data)
//     console.log('删除成功')
// })
// .catch((err)=>{
//     console.log('删除失败')
//     console.log('err: ', err)
// })