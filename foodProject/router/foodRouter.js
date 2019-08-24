//user路由逻辑
const express = require('express')
//引入user模型
const foodModel = require('../db/model/foodModel')

const router = express.Router()

router.post('/add', (req, res)=>{

    let {name, price, desc, typename, typeid, img} = req.body

    if(!name || !price || !desc || !typename || !typeid || !img) return res.send({err: -3, msg: '缺少参数'})

    foodModel.find({name})
    .then((data)=>{
        if(data.length === 0){
           return foodModel.insertMany({name, price, desc, typename, typeid, img})
        }else{
            return res.send({err: -1, msg: '菜品名字相同'})
        }
    })
    .then((data)=>{
        res.send({err:0, msg: '添加成功'})
    })
    .catch((err)=>{
        return res.send({err: -2, msg: '添加失败'})
    })

})

router.post('/getInfoByType', (req, res)=>{
    let {typeid} = req.body

    if(!typeid) return res.send({err: -2, msg: '缺少参数'})

    foodModel.find({typeid})
    .then((data)=>{
        res.send({err: 0, msg: '查询成功', list: data})
    })
    .catch((err)=>{
        res.send({err: -1, msg: '查询失败'})
    })
})

router.post('/getInfoByKw', (req, res)=>{
    let {kw} = req.body

    if(!kw) return res.send({err: -2, msg: '缺少参数'})

    let reg = new RegExp(kw)

    foodModel.find({$or: [{name: {$regex:reg}}, {desc: {$regex:reg}}]})
    .then((data)=>{
        res.send({err: 0, msg: '查询成功', list: data})
    })
    .catch((err)=>{
        res.send({err: -1, msg: '查询失败'})
    })
})

router.post('/del', (req, res)=>{

    //id是个数组类型
    //req.body.id接收的是个字符串
    //eval()把字符串转成数组
    let id = eval(req.body.id)

    if(!id) return res.send({err: -2, msg: '缺少参数'})

    foodModel.remove({_id: { $in: id }})
    .then((data)=>{
        res.send({err: 0, msg: '删除成功'})
    })
    .catch((err)=>{
        res.send({err: -1, msg: '删除失败'})
    })
})

router.post('/update', (req, res)=>{
    let {name, price, desc, typename, typeid, img, _id} = req.body

    if(!name || !price || !desc || !typename || !typeid || !img || !_id) return res.send({err: -2, msg: '缺少参数'})

    foodModel.updateOne({_id}, {name, price, desc, typename, typeid, img})
    .then((data)=>{
        res.send({err: 0, msg: '更新成功'})
    })
    .catch((err)=>{
        res.send({err: -1, msg: '更新失败'})
    })
})

router.post('/getInfoByPage',(req,res)=>{
    let pageSize=req.body.pageSize || 2 //设置默认值
    let page =req.body.page || 1
    foodModel.find().limit(Number(pageSize)).skip(Number((page-1)*pageSize))
    .then((data)=>{
      res.send({err:0,msg:'查询ok',list:data})
    })
    .catch(()=>{
      res.send({err:-1,msg:'查询失败'})
    })
})

module.exports = router