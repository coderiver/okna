head.ready(function() {
    var agent = navigator.userAgent,
    event = (agent.match(/iPad/i)) ? "touchstart" : "click";


    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }
    running = 0;
    function goto(n){

        if( $(".section"+n).hasClass('is-active') || running){console.log('dont run');}
        else{
            console.log('goto'+n);
            running = 1;
            $('.section.is-active').removeClass('is-active').addClass('was-active');
            $(".section"+n).addClass('is-active').css({'opacity':0}).animate({
                opacity: 1
              }, 100, function() {
                // Animation complete.
                $('.section.a').removeClass('a');
                $(this).addClass('a');
                $('.section.was-active').removeClass('was-active');
                
                setTimeout(function(){running = 0;},1000);
                if(n==5){
                       if($('.tab-cont.is-shown').length){}else{
                        $(".js-tab1").addClass('is-shown');
                        }
                }
              });
            // $('.section.is-active').removeClass('is-active').addClass('was-active');
            // $(".section"+n).addClass('is-active');
            //  $('html, body').animate({
            //     scrollTop: $(".section"+n).offset().top
            // }, 600,function(){
            //     $(".section"+n).addClass('a');
            //     setTimeout(function(){running = 0;},500);
            //     if(n==5){
            //        if($('.tab-cont.is-shown').length){}else{
            //         $(".js-tab1").addClass('is-shown');
            //         }
            //     }
            // });


        }
        
    }
    function next(){
        cur = $('.section.is-active').data('nomer');
        if(cur<7){goto(cur+1);}
    }
    function prev(){
        cur = $('.section.is-active').data('nomer');
        if(cur>1){goto(cur-1);}
    }


    //goto(1);
    $('.nav__ul a').click(function(event) {
        n = $(this).attr('href');
        n = n.substr(1);
        goto(n);
        return false;
    });
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
    

    $('body').bind(mousewheelevt, function(e){
        
        
        

            var evt = window.event || e //equalize event object     
            evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
            var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

            if(delta > 0) {
                prev();
            }
            else{
                next();
            }   
            return false;
        

    });



    // first slide, activate
    $('.section1').addClass('a');
    //$('.section').addClass('a');
    
    $('.gobottom').click(function(event) {
        goto(2);
    });
    // parallax on main
    $('.section1').mousemove(function(e){
        var x = -(e.pageX) / 20;
        var y = -(e.pageY) / 5;
        //y = 0;
        if($('body').hasClass('is-window')){}else{
            $('.home__blue').css({'margin-left': x + 'px'});
            $('.home__green').css({'margin-left': x/2 + 'px'});
        }
        //$('.tth__left,.tth__right').css({'margin-left': x/2 + 'px'});
    });
    $('.home__window').hover(function() {
        $('body').addClass('is-window');
    }, function() {
        $('body').removeClass('is-window');
    });
    $('.home__window').mousemove(function(e){
        var x = -(e.pageX) / 20;
        var y = -(e.pageY) / 5;
       
        $('.parallaxpic').css({'margin-top':y/4 + 'px'});
    });
    $('.section3').mousemove(function(e){
        var x = -(e.pageX) / 20;
        var y = -(e.pageY) / 5;
       
        $('.tth__left').css({'margin-left': x/4 + 'px'});
        $('.tth__right').css({'margin-right': -x/4 + 'px'});
    });
    





   //2 video
   $('.js-video').click(function(event) {
       $(".overlay").fadeIn(1000,function(){
            $('.videopopup').fadeIn();
       })
       return false;
   });
   $('.overlay,.videopopup__close').click(function(event) {
       $('.overlay,.videopopup').fadeOut();
   });


    
	

    //slide 5
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_item = $(this).find("li");
         var tab_cont = $(this).parents(".js-tab-group").children('.tab__wrap').find(".js-tab-cont");
         //tab_cont.hide();
         tab_item.first().addClass("is-active");
         //$(this).parents(".js-tab-group").children('.tab__wrap').find(".js-tab1").addClass('is-shown');
         tab_link.on("click", function() {
             var index = $(this).attr("href");
             tab_item.removeClass("is-active");
             $(this).parent().addClass("is-active");
             tab_cont.removeClass('is-shown');
             $(this).parents(".js-tab-group").children('.tab__wrap').find("."+index).addClass('is-shown');
             return false;
          });
       });
	}
	tab();
    //todo - slides switch

    // slide 6
    $('.furn__sw a').click(function(event) {
        $('.furn').addClass("notransitions");
        $('.furn__sw a').removeClass('is-active');
        $(this).addClass('is-active');
        $('.furn__slide,.furn__pic').fadeOut();
        idd = $(this).attr('href');
        $(idd).fadeIn();
        $(idd+'p').fadeIn();
        return false;
    });


    //slide7
    $('.gallery__item').click(function(event) {
        href = $(this).attr('href');
        $('.gallery__img').html('<img src="'+href+'">');
        $('.gallery__big').fadeIn()
        return false;
    });
    $('.gallery__close').click(function(event) {
        $('.gallery__big').fadeOut();
    });
    $('.js-popup').click(function(event) {
        $('.overlay').fadeIn(600,function(){
            $('.popup').fadeIn();
        });
        return false
    });
    $('.popup__close,.overlay').click(function(event) {
        $('.overlay,.popup').fadeOut();
    });
    $('.help').click(function(event) {
        if($(this).hasClass('is-open')){}
        else{
            $('.help').removeClass('is-open');
            $('.help__popup').fadeOut();

            $(this).addClass('is-open').children('.help__popup').fadeIn();
        }
        return false;
    });
    $('.help__close').click(function(event) {
        $('.help').removeClass('is-open');
        $('.help__popup').fadeOut();
    });
    $(document).on("click", function(){
        $('.help').removeClass('is-open');
        $(".help__popup").fadeOut();
    });

	// console.log($('body').html());
});