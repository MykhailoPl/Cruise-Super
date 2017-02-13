$(document).ready(function(){
  $('.carusel').slick({
    infinite: true,
     
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      
      responsive: [
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
      
  });
  
  $('.slider-partners').slick({
    infinite: true,
     
      slidesToShow: 7,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
     {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
   ]
      
  });
  
   
  
});
