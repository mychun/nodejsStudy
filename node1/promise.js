const fs = require('fs')

//封装
function isEixt(){
    return new Promise((resolve, reject)=>{
        // fs.stat获取文件是否存在
        fs.stat('./hehe.js', (err, stats)=>{
            if(err){
                reject('文件不存在')
            }else{
                resolve('文件存在')
            }
        })
    })
}

function delFile(){
    return new Promise((resolve, reject)=>{
        //fs.unlink异步删除文件
        fs.unlink('./hehe.js', (err)=>{
            if(err){
                reject('删除失败')
            }else{
                resolve('删除成功')
            }
        })
    })
}

isEixt().then(()=>{
    console.log('isEixt')
    return delFile()
})
.then(()=>{
    console.log('delFile')
    //如果要终止Promse的then执行，可以使用抛出错误
    //throw new Error('终止执行')
})
.then(()=>{
    //就算上个then没return 一个Promise
    //多出的then也会执行
    console.log('我还是执行了')
})
.catch((err)=>{
    console.log('catch')
    console.log('err: ', err)
})