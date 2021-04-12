$(document).ready(function() {
  var slider2 = $('.slider-2').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<b>CAT</b>'
  });
	
  //Hide the Previous button.
  $('.slick-prev').hide();
  
  slider2.on('afterChange', function(event, slick, currentSlide) {  	
  console.log(currentSlide);
  	//If we're on the first slide hide the Previous button and show the Next
    if (currentSlide === 0) {
      $('.slick-prev').hide();
      $('.slick-next').show();
    }
    else {
    	$('.slick-prev').show();
    }
    
    //If we're on the last slide hide the Next button.
    if (slick.slideCount === currentSlide + 1) {
    	$('.slick-next').hide();
    }
  });
});