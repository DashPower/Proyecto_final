const multipleCardCarousel_3 = $("#carouselExampleControls3");
let isMobile = false


if (window.matchMedia("(min-width: 768px)").matches) { // Solo de 768 para arriba
  console.log('Se ejecuto el media query')
  /* var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  }); */

  //Hay 2 carruseles, y estas 3 variables, deberian repetirse por cada carrucel.
  const carouselWidth_3 = multipleCardCarousel_3.find(".carousel-inner")[0].scrollWidth;
  const cardWidth_3 = multipleCardCarousel_3.find(".carousel-item").width();
  let scrollPosition_3 = 0;

  multipleCardCarousel_3.find(".carousel-control-next").on("click", function () {
    
    if ( scrollPosition_3 < cardWidth_3 * (5 - 3) ) { // Mientras no sea el ultimo item
      scrollPosition_3 += cardWidth_3;
      multipleCardCarousel_3.find(".carousel-inner").animate(
        { scrollLeft: scrollPosition_3 },
        600
      );
    } else {
      scrollPosition_3 = 0
      multipleCardCarousel_3.find(".carousel-inner").animate(
        { scrollLeft: scrollPosition_3 },
        600
      );
      
    }
  });
  
  multipleCardCarousel_3.find(".carousel-control-prev").on("click", function () {
        
      if (scrollPosition_3 > 0) {
        scrollPosition_3 -= cardWidth_3;
        multipleCardCarousel_3.find(".carousel-inner").animate(
          { scrollLeft: scrollPosition_3 },
          600
        );
      } 
  });

 
  setInterval(function(){
    if(isMobile) return
    multipleCardCarousel_3.find(".carousel-control-next").click()
  }, 3 * 1000)

} else {
  multipleCardCarousel_3.addClass("slide");
}

setInterval(mobileDetector,100)

function mobileDetector(){
  if(!window.matchMedia("(min-width: 768px)").matches) {
    // estoy en telefono
    multipleCardCarousel_3.addClass("slide");
    isMobile = true
    
  } else {
    // ya no estoy en telefono
    multipleCardCarousel_3.removeClass("slide");
    
    isMobile = false
    
  }
}