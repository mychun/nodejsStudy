let backgroundColor = $('#box span:first-child').css('background-color')
$('#box').children().each((i, el)=>{
    if(backgroundColor != $(el).css('background-color')){
        $(el).click()
    }else{
        backgroundColor = $(el).css('background-color')
    }
})

setInterval(()=>{
    $('#box').children().each((i, el)=>{
        if(backgroundColor != $(el).css('background-color')){
            $(el).click()
        }else{
            backgroundColor = $(el).css('background-color')
        }
    })
}, 100)
