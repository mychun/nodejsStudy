const express = require('express')
const router = express.Router()

router.get('/add', (req, res)=>{
    res.send('user add')
})

router.get('/del', (req, res)=>{
    res.send('user del')
})

//创建post请求
router.post('/reg', (req, res)=>{
    console.log(req.body)
    let { us, ps } = req.body
    if(us === 'wy' && ps == 123){
        res.send({err: 0, msg: 'reg success'})
    }else{
        res.send({err: -1, msg: 'reg failed'})
    }
})

//把router放出去
module.exports = router