$(function(){
    //메뉴
    $('.gnb li').hover(
        function(){ 
            $(this).find('ul').stop().show()
        },
        function(){
            $(this).find('ul').stop().hide()
        }
    )
    
    //슬라이드
    setInterval(function(){
        $('.slide').animate({left: '-100%'}, function(){
            $('.slide a:first').appendTo('.slide')
            $('.slide').css('left',0)
        })
    }, 3000)
})
