//webSocket是长链接
//webSocket是没有跨域问题
const WebSocket = require('ws')

//创建服务器
const ws = new WebSocket.Server({ port: 8080 }, ()=>{
    console.log('socket start')
})

let clients = []

ws.on('connection', (client) => {
    console.log('客户端已连接')

    //把每个客户端对象都放到一个数组
    clients.push(client)

    //主动向前端发送数据
    //只能发送字符串
    client.send('欢迎光临') 

    //监听前端发来的数据
    client.on('message', (msg)=>{
        console.log('来自前端的问候：' + msg)
        if(msg === '广播'){
            sendAll()
        }
    })

    client.on('close', (msg) => {
        console.log('客户端主动断开连接')
    })
})

function sendAll(){
    clients.forEach((item)=>{
        item.send('世界广播')
    })
}