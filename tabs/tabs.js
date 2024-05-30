const tabs_container = document.querySelectorAll('.main__container');

tabs_container.forEach((el) => {
    el.addEventListener('click', (container) => {
       if(container.target.classList.contains('tab__switch'))
        {
           let switch__elements = el.children[0].children;
           [...switch__elements].forEach(switch__el => switch__el.classList.remove('select') )
           container.target.classList.add('select');

           let tabs = el.children[1].children
           tabs[0].classList.remove('no__checked');
            
           let tab__switch = container.target;
           [...tabs].forEach((tab) => {
                tab.style.display = "none";
                if(tab__switch.id == tab.id){
                    tab.style.display = "flex";
                    tab.classList.remove('no__checked');
                }
            })
        }
        IsElementsChecked()
    })
})


const enterButton = document.querySelector('button');



function IsElementsChecked(){
    const unchecked_elements = document.querySelectorAll('.no__checked')
    if(unchecked_elements.length == 0)
        {
          enterButton.disabled = false;
        }
}





















