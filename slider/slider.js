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

  const sliders = document.querySelectorAll('.swiper');
  const slides = document.querySelectorAll('.swiper-slide');
  const nextButton = document.querySelector('.swiper-button-next');
  const enterButton = document.querySelector('button');


  function CheckSlides(el){
    let slides = "";
    if(el.target.classList.contains('swiper-button-next') || el.target.classList.contains('swiper-button-prev') )
      {
        slides = el.target.parentElement.parentElement.children[0].children;
      }
    if(el.target.classList.contains('arrow__icon__next') || el.target.classList.contains('arrow__icon__prev'))
      {
        slides = el.target.parentElement.parentElement.parentElement.children[0].children;

      }

      [...slides].forEach((el) => {
        if(el.classList.contains('swiper-slide-active'))
          {
            el.classList.remove('no__checked');
            console.log(el)
          }
      })
  }

  sliders.forEach(el => el.addEventListener('click', (el) => {
    CheckSlides(el)
    IsElementsChecked()
  }
))

  function IsElementsChecked(){
    const unchecked_elements = document.querySelectorAll('.no__checked')
    if(unchecked_elements.length == 0)
        {
          enterButton.disabled = false;
        }
}