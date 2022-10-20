$(function(){
    $('.button').click(function(){
        if($(this).is('.select')){
            $(this).removeClass('select')
        }else{
            $(this).addClass('select')
        }
    })

    $('#result').click(function(){
        if($('.select').length<1){
            alert('还没有选择食堂呢')
            return
        }
        var resultText = ''
        var length = $('.select').length
        var index = parseInt(Math.random()*length)
        var ct = $('.select')[index]
        resultText += ct.innerText
        var length1 = $(ct).children().length;
        var index1 = parseInt(Math.random()*length1)
        var f = $(ct).children()[index1]
        resultText += '：'
        resultText += $(f).val()
        $(this).text(resultText)
    })
})