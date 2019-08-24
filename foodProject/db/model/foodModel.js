const mongoose = require('mongoose')

//scheme对象

//创建一个和集合相关的schema对象，类似表头
//let Schema = mongoose.Schema
//创建并获取schema对象

let foodSchema = new mongoose.Schema({
    name: {type:String, require:true},
    price: {type:String, require:true},
    desc: {type:String, require:true},
    typename: {type:String, require:true},
    typeid: {type:Number, require:true},
    img:{type:String,require:true}
})

//将schema对象转化为数据模型
//这样就可以进行增删改查操作

//该数据对象和集合关联('集合名', schema对象)
let Food = mongoose.model('foods', foodSchema)

module.exports = Food