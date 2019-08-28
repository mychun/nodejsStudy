// let backgroundColor = $('#box span:first-child').css('background-color')
// $('#box').children().each((i, el)=>{
//     if(backgroundColor != $(el).css('background-color')){
//         $(el).click()
//     }else{
//         backgroundColor = $(el).css('background-color')
//     }
// })

// setInterval(()=>{
//     $('#box').children().each((i, el)=>{
//         if(backgroundColor != $(el).css('background-color')){
//             $(el).click()
//         }else{
//             backgroundColor = $(el).css('background-color')
//         }
//     })
// }, 100)

console.log(1)
process.nextTick(()=> console.log(2))
Promise.resolve().then(()=>{console.log(3)})
Promise.resolve().then(()=> console.log(4))
process.nextTick(()=> console.log(5))
console.log(6)
