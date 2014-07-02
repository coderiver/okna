head.ready(function() {

var imagesArray = new Array(15).join(',').split(',');
imagesArray = imagesArray.map(function(el, i){
    return 'http://fc05.deviantart.net/fs71/f/2013/334/a/4/digital_painting___ocean_wave___meereswoge__welle__by_dasflon-d6w8j0s.jpg';
    //return 'img/frames/' + i + '.jpg?' +new Date();
});
console.log(imagesArray);
// @todo LIST ALL IMAGES HERE
// COMMENT TOP 
imagesArray = ["img/blue_left.png",
"img/blue_right.png",
"img/green_right.png",
"img/green_left.png",
"img/homeshadow.png",
"img/window1.png",
"img/view.png",
"img/parallax.jpg"
];
console.log(imagesArray);
var imageContainer = document.getElementById('preload');

// instantiate the pre-loader with an onProgress and onComplete handler
new preLoader(imagesArray, {
    onProgress: function(img, imageEl, index){
        // fires every time an image is done or errors. 
        // imageEl will be falsy if error
        console.log('just ' +  (!imageEl ? 'failed: ' : 'loaded: ') + img);
        
        var percent = Math.floor((100 / this.queue.length) * this.completed.length);
        // console.log(percent);
        // $('.preloader__progress').css('width',percent+'%');
        // $('.preloader__realc').text(percent+'%');
        // update the progress element
        //$('.myloader__in').html('<span>' + index + ' / ' + this.queue.length + ' ('+percent+'%)</span>');
        $('.myloader__progress').css('width',percent+'%');
        // progress.value = index;
        // var regExp = /\"([^)]+)\"/;
        // var matches = regExp.exec(imageEl);
        // console.log(img);
        // nomer = img.split('/')[2].split('.')[0];
        // console.log(nomer);
        // imageEl = '<div class="arr arr'+nomer+'" style="background-image:url('+img+')"></div>';
        // console.log(imageEl);
        $('#preload').append(img);
        
        // can access any propery of this
        console.log(this.completed.length + this.errors.length + ' / ' + this.queue.length + ' done');
    }, 
    onComplete: function(loaded, errors){
        // fires when whole list is done. cache is primed.
        
        console.log('done loading!', loaded);
      	//alert('loaded');
      	$('#myloader').fadeOut(1000,function(){
      		$('.section1').addClass('a');
      	});

        
        
        if (errors){
            console.log('the following failed', errors);
        }
    }
});

});