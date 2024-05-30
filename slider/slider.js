const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const slides = document.querySelectorAll('.swiper-slide');
  const nextButton = document.querySelector('.swiper-button-next');
  const enterButton = document.querySelector('button');
  let completeSlides = 1;

  nextButton.addEventListener('click', CheckSlides);

  function CheckSlides(){
        completeSlides+=1;
        if(completeSlides >= 4)
          {
            enterButton.disabled = false
          }
  }
