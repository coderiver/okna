head.ready(function() {
    var agent = navigator.userAgent,
    event = (agent.match(/iPad/i)) ? "touchstart" : "click";



    running = 0;
    function goto(n){

        if( $(".section"+n).hasClass('is-active') || running){console.log('dont run');}
        else{
            console.log('goto'+n);
            running = 1;
            $('.section.is-active').removeClass('is-active').addClass('was-active');
        
            $(".section"+n).addClass('is-active').css({'opacity':0}).animate({
                opacity: 1
              }, 1000, function() {
                // Animation complete.
                $(this).addClass('a');
                $('.section.was-active').removeClass('was-active');
                
                setTimeout(function(){running = 0;},1000);
                if(n==5){
                       if($('.tab-cont.is-shown').length){}else{
                        $(".js-tab1").addClass('is-shown');
                        }
                }
              });

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

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           next();
       }
       if($(window).scrollTop()==0){
            prev()
       }
    });
    //goto(1);
    $('.nav__ul a').click(function(event) {
        n = $(this).attr('href');
        n = n.substr(1);
        goto(n);
        return false;
    });
    s2 = $(".section2").offset().top;
    s3 = $(".section3").offset().top;
    s4 = $(".section4").offset().top;
    s5 = $(".section5").offset().top;
    s6 = $(".section6").offset().top;
    s7 = $(".section7").offset().top;
    sp = 100;
    var lastScrollTop = 0;
    var curr = 1;
    var curr1 = 1;
    $(window).scroll(function(event) {
        // ttop = $(document).scrollTop();
        // h = $(window).height();
        // //console.log(ttop);
        // if(ttop>s2-sp){$('.section2').addClass('a');}
        // if(ttop>s3-sp){$('.section3').addClass('a');}
        // if(ttop>s4-sp){$('.section4').addClass('a');}
        // if(ttop>s5-sp){
        //     $('.section5').addClass('a');
        //     if($('.tab-cont.is-shown').length){}else{
        //         $(".js-tab1").addClass('is-shown');
        //     }
        // }
        // if(ttop>s6-sp){$('.section6').addClass('a');}
        // if(ttop>s7-sp){$('.section7').addClass('a');}


        // var st = $(this).scrollTop();
        
        //    if (st > lastScrollTop){
        //        // downscroll code
        //        //console.log('down');
        //        if(ttop+h -20>s2){curr1 = 2}
        //        if(ttop+h -20>s3){curr1 = 3}
        //        if(ttop+h -20>s4){curr1 = 4}
        //        if(ttop+h -20>s5){curr1 = 5}
        //        if(ttop+h -20>s6){curr1 = 6}
        //        if(ttop+h -20>s7){curr1 = 7}
        //         console.log(curr1);
        //    } else {
        //       // upscroll code
        //         if(ttop<s7){curr1 = 6}
        //         if(ttop<s6){curr1 = 5}
        //         if(ttop<s5){curr1 = 4}
        //         if(ttop<s4){curr1 = 3}
        //         if(ttop<s3){curr1 = 2}
        //         if(ttop<s2){curr1 = 1}
                   
               
        //     console.log(curr1);
        //    }
        //    if(!$('body').hasClass('running')){

        //              if(curr!=curr1){
        //                 //$('body').addClass('running');
        //                 goto(curr1);
        //                 console.log(curr1);
        //                 curr = curr1;
        //            }
        //    }
          
           
        //    lastScrollTop = st;

        // determin nomer slide po bottom

        // $('.section').each(function(){
        //     $(this)
        // })

        //get nomer of current slide of bottom
        
    });

    $(window).on('scroll',function(event) {
        if($('body').hasClass('running')){
            event.preventDefault();

        }
        
    });

    // first slide, activate
    $('.section1').addClass('a');
    
    $('.gobottom').click(function(event) {
        goto(2);
    });
    // parallax on main
    $('.section1').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 6);
        var amountMovedY = (e.pageY * -1 / 6);
        var x = -(e.pageX) / 20;
        var y = -(e.pageY) / 5;
        //y = 0;
        $('.home__blue').css({'margin-left': x + 'px'});
        $('.home__green').css({'margin-left': x/2 + 'px'});
        $('.parallaxpic').css({'margin-top':y/4 + 'px'});
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


	// console.log($('body').html());
});