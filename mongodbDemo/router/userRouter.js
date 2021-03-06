//user路由逻辑
const express = require('express')
//引入user模型
const userModel = require('../db/model/userModel')
//邮箱验证码模块
const Mail = require('../utils/mail')

//创建router
const router = express.Router()

//存储验证码
let codes = {
    mail: '', //发送邮箱
    code: '', //验证码
    ctime: 0, //有限时间
    sum: 0  //发送次数
}
const validTime = 300 //验证码有效时间s
const sumTime = 300 //能sendSum次数的有效时间内s
const sendSum = 3 //邮箱验证码发送限制次数

//apidoc -i ./ -o apidoc/
/**
 * @api {post} /user/reg 用户注册
 * @apiVersion 0.2.0
 * @apiName 注册
 * @apiGroup User
 *
 * @apiParam {String} us1 用户名.
 * @apiParam {String} ps1 用户密码.
 * @apiParam {String} code 邮箱验证码.
 *
 * @apiSuccess err:0 注册成功.
 * 
 * @apiError err:-1 缺少<code>参数</code>.
 * @apiError err:-2 注册失败.
 * @apiError err:-3 <code>邮箱验证码</code>错误.
 * @apiError err:-4 <code>邮箱验证码</code>已过期.
 * @apiError err:-5 <code>用户名</code>已存在.
 */
router.post('/reg', (req, res)=>{
    let { us, ps, code } = req.body
    if(!us || !ps || !code) return res.send({ err: -1, msg: '缺少参数' })

    if(codes.ctime >= validTime) {
        return res.send({err: -4, msg: '邮箱验证码已过期'})
    }

    //邮箱验证码一样要通过邮箱帐号来获取，要不会遇到邮箱不正确，但知道验证码
    if(codes.mail != us || codes.code != code){
        return res.send({err: -3, msg: '邮箱验证码错误'})
    }

    userModel.find({us}).then((data)=>{
        if(data.length === 0){
            return userModel.insertMany({us, ps})
        }else{
            return res.send({err: -5, msg: '用户名已存在'})
        }
    }).then((data)=>{
        res.send({err: 0, msg: '注册成功'})
    }).catch((err)=>{
        console.log(err)
        res.send({err: -2, msg: '注册失败' })
    })
})

/**
 * @api {post} /user/login 用户登录
 * @apiVersion 0.0.0
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps 用户密码.
 *
 * @apiSuccess err:0 登录成功.
 * 
 * @apiError err:-1 缺少<code>参数</code>.
 * @apiError err:-2 登录出错.
 * @apiError err:-3 <code>帐号或密码</code>不正确.
 */
router.post('/login', (req, res)=>{
    let { us, ps } = req.body
    if(!us || !ps) return res.send({ err: -1, msg: '缺少参数' })
    userModel.find({us, ps}).then((data)=>{
        if(data.length>0){
            res.send({err: 0, msg: '登录成功'})
        }else{
            res.send({err: -3, msg: '帐号或密码不正确'})
        }
    }).catch((err)=>{
        res.send({err: -2, msg: '登录出错'})
    })
})

/**
 * @api {post} /user/getMailCode 获取邮箱验证码
 * @apiVersion 0.0.0
 * @apiName 获取邮箱验证码
 * @apiGroup User
 *
 * @apiParam {String} mail 邮箱.
 *
 * @apiSuccess err:0 发送成功.
 * 
 * @apiError err:-1 缺少邮箱<code>参数</code>.
 * @apiError err:-2 发送失败.
 * @apiError err:-3 m分钟内发送超过n次.
 */
router.post('/getMailCode', (req, res)=>{
    let {mail} = req.body
    if(!mail) return res.send({err: -1, msg: '缺少邮箱参数'})

    if(codes.sum >= sendSum) {
        return res.send({err: -3, msg: `${sumTime/60} 分钟内发送次数超过${sendSum}次，稍候再发`})
    }

    let code = parseInt(Math.random() * 10000)
    Mail.send(mail, code).then(()=>{
        //验证码处理
        codesCl(mail, code)

        res.send({err: 0, msg: '发送成功'})
    }).catch((err)=>{
        console.log(err)
        res.send({err: -2, msg: '发送失败'})
    })
})

//验证码处理
function codesCl(mail, code){
    codes.mail = mail
    codes.code = code
    codes.ctime = 0

    if(codes.sum === 0){
        //超过sumTime时间就重置为0
        setTimeout(()=>{
            codes.sum = 0
        }, sumTime*1000)
    }

    let si = setInterval(()=>{
        codes.ctime += 1
        if(codes.ctime >= validTime){
            clearInterval(si)
        }
    }, 1000)

    codes.sum += 1
}

module.exports = router