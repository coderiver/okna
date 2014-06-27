head.ready(function() {
    var agent = navigator.userAgent,
    event = (agent.match(/iPad/i)) ? "touchstart" : "click";

    $(document).bind(event, function(e){
        $(".js-popup").hide();
    });
    function goto(n){
        $('html, body').animate({
            scrollTop: $(".section"+n).offset().top
        }, 1000);
    }
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
    $(window).scroll(function(event) {
        ttop = $(document).scrollTop();
        //console.log(ttop);
        if(ttop>s2-sp){$('.section2').addClass('a');}
        if(ttop>s3-sp){$('.section3').addClass('a');}
        if(ttop>s4-sp){$('.section4').addClass('a');}
        if(ttop>s5-sp){$('.section5').addClass('a');}
        if(ttop>s6-sp){$('.section6').addClass('a');}
        if(ttop>s7-sp){$('.section7').addClass('a');}

        $('.section').each(function(){
            $(this)
        })
    });

    // first slide, activate
    $('.section1').addClass('a');
    
    $('.gobottom').click(function(event) {
        goto(2);
    });
    // parallax on main
    $('.section').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 6);
        var amountMovedY = (e.pageY * -1 / 6);
        var x = -(e.pageX + this.offsetLeft) / 20;
        var y = -(e.pageY + this.offsetTop) / 5;
        y = 0;
        $('.home__blue').css({'margin-top':y + 'px','margin-left': x + 'px'});
        $('.home__green').css({'margin-top':y/2 + 'px','margin-left': x/2 + 'px'});
    });


   //2


    
	

    //slide 5
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_item = $(this).find("li");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         tab_item.first().addClass("is-active");
         $(this).parents(".js-tab-group").find(".js-tab1").show();
         tab_link.on("click", function() {
             var index = $(this).attr("href");
             tab_item.removeClass("is-active");
             $(this).parent().addClass("is-active");
             tab_cont.hide();
             $(this).parents(".js-tab-group").find("."+index).show();
             return false;
          });
       });
	}
	tab();
    //todo - slides switch

    // slide 6
    $('.furn__sw a').click(function(event) {
        $('.furn__sw a').removeClass('is-active');
        $(this).addClass('is-active');
        $('.furn__slide').hide();
        idd = $(this).attr('href');
        $(idd).addClass('is-shown').show();
        return false;
    });


    //slide7
    //fotos zoom


	// console.log($('body').html());
});