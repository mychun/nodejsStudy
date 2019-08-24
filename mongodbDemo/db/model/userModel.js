const mongoose = require('mongoose')

//scheme对象

//创建一个和集合相关的schema对象，类似表头
//let Schema = mongoose.Schema
//创建并获取schema对象

let userSchema = new mongoose.Schema({
    us: {type:String, require:true},
    ps: {type:String, require:true},
    age: Number,
    sex: {type:Number, default: 0}
})

//将schema对象转化为数据模型
//这样就可以进行增删改查操作

//该数据对象和集合关联('集合名', schema对象)
let User = mongoose.model('users', userSchema)

module.exports = User