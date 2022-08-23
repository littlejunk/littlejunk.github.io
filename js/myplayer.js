$(function(){
    $('button').click(function(){
        var prefix = 'video/'
        var name = $('#videoid').val()
        var buffix = '.mp4'
        $('video').attr('src',prefix+name+buffix)
    })
})