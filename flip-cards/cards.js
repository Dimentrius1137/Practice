const cards = document.querySelector('.js_cards_cont');

cards.addEventListener('click', (el) => {
    
    if(el.target.classList.contains('js_flip_btn')){
       let card = el.target.parentElement.parentElement.parentElement;
       card.classList.remove('no__checked');
       card.classList.toggle('flip');
       setTimeout(() => {
        if(card.classList.contains('flip')){
            card.children[0].style.display = "none";
            card.children[1].style.display = "flex"
       }
       else{
        card.children[0].style.display = "flex";
        card.children[1].style.display = "none"
       }
       }, 300);

    }
    IsElementsChecked()
    
})

const enterButton = document.querySelector('button');
function IsElementsChecked(){
    const unchecked_elements = document.querySelectorAll('.no__checked')
    if(unchecked_elements.length == 0)
        {
          enterButton.disabled = false;
        }
}