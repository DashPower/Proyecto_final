const multipleCardCarousel_1 = $("#carouselExampleControls1");
const multipleCardCarousel_2 = $("#carouselExampleControls2");
let isMobile = false


if (window.matchMedia("(min-width: 768px)").matches) { // Solo de 768 para arriba
  console.log('Se ejecuto el media query')
  /* var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  }); */

  //Hay 2 carruseles, y estas 3 variables, deberian repetirse por cada carrucel.

  const carouselWidth_1 = multipleCardCarousel_1.find(".carousel-inner")[0].scrollWidth;
  const cardWidth_1 = multipleCardCarousel_1.find(".carousel-item").width();
  let scrollPosition_1 = 0;

  const carouselWidth_2 = multipleCardCarousel_2.find(".carousel-inner")[0].scrollWidth;
  const cardWidth_2 = multipleCardCarousel_2.find(".carousel-item").width();
  let scrollPosition_2 = 0;

  multipleCardCarousel_1.find(".carousel-control-next").on("click", function () {
      console.log('Se ejecuto el click siguiente')
    if (scrollPosition_1 < cardWidth_1 * (5 - 3) ) { // Mientras no sea el ultimo item
      console.log('Entro en la condicion de next, carrucel 1')
      scrollPosition_1 += cardWidth_1;
      multipleCardCarousel_1.find(".carousel-inner").animate(
        { scrollLeft: scrollPosition_1 },
        600
      );
    } else {
      scrollPosition_1 = 0
      multipleCardCarousel_1.find(".carousel-inner").animate(
        { scrollLeft: scrollPosition_1 }, 600
      );
      console.log('Llegamos al final del carrucel1')
    }
  });

  multipleCardCarousel_1.find(".carousel-control-prev").on("click", function () {
      console.log('Se ejecuto el click anterior')
    if (scrollPosition_1 > 0) { //Si, no esta al inicio el scroll
      scrollPosition_1 -= cardWidth_1;
      multipleCardCarousel_1.find(".carousel-inner").animate(
        { scrollLeft: scrollPosition_1 },
        600
      );
    } else {
      console.log('Llegamos el principio del carrucel1')
    }
  });

  multipleCardCarousel_2.find(".carousel-control-next").on("click", function () {
    console.log('Se ejecuto el click siguiente')
  if ( scrollPosition_2 < cardWidth_2 * (4 - 3) ) { // Mientras no sea el ultimo item
    scrollPosition_2 += cardWidth_2;
    multipleCardCarousel_2.find(".carousel-inner").animate(
      { scrollLeft: scrollPosition_2 },
      600
    );
  } else {
    scrollPosition_2 = 0
    multipleCardCarousel_2.find(".carousel-inner").animate(
      { scrollLeft: scrollPosition_2 },
      600
    );
    console.log('llegamos al final del carrucel2')
  }
});

  multipleCardCarousel_2.find(".carousel-control-prev").on("click", function () {
      console.log('Se ejecuto el click anterior')
    if (scrollPosition_2 > 0) {
      scrollPosition_2 -= cardWidth_2;
      multipleCardCarousel_2.find(".carousel-inner").animate(
        { scrollLeft: scrollPosition_2 },
        600
      );
    } else {
      console.log('Llegamos al principio del carrucel2')
    }
  });

  setInterval(function(){
    if(isMobile) return
    multipleCardCarousel_1.find(".carousel-control-next").click()
  }, 3 * 1000)

  setInterval(function(){
    if(isMobile) return
    multipleCardCarousel_2.find(".carousel-control-next").click()
  }, 3 * 1000)

} else {
  multipleCardCarousel_1.addClass("slide");
  multipleCardCarousel_2.addClass("slide");
}

setInterval(mobileDetector,100)

function mobileDetector(){
  if(!window.matchMedia("(min-width: 768px)").matches) {
    // estoy en telefono
    multipleCardCarousel_1.addClass("slide");
    multipleCardCarousel_2.addClass("slide");
    isMobile = true
    console.log('Ahora estoy en telefono')
  } else {
    // ya no estoy en telefono
    multipleCardCarousel_1.removeClass("slide");
    multipleCardCarousel_2.removeClass("slide");
    isMobile = false
    console.log('Ya no estoy en telefono')
  }
}