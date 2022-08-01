        //JavaScript//
        var list = $(".list_item"),
        backGroundArea = $('div.main_visual_area');
         
        //フェード用の白領域を追加
        backGroundArea.prepend('<div class="mainvisual_blur"></div>');
        var Blur = $('.mainvisual_blur');
                 
        list.each(function(){
            var imgUrl = $(this).find('img').attr('alt');
        　　　　//hoverすると背景画像設置→白領域を透過
            $(this).hover(function(){
            backGroundArea.css("backgroundImage" , "url(" + imgUrl + ")");
            Blur.stop().animate({opacity:"0"},1000);
            })
        　　　　//hoverが外れると白領域が非透明になり、背景画像削除
            $(this).mouseleave(function(){
                　Blur.stop().animate({opacity:"1"},500,function(){
            　backGroundArea.css("backgroundImage" , "none"); 
            　});
            })
        });