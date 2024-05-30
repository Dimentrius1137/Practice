const tabs = document.querySelectorAll('.tab__content');
const switches = document.querySelectorAll('.tab__switch__cont');

switches.forEach(switchEl => switchEl.addEventListener('click', (switch_el) => {
    if(switch_el.target.classList.contains('tab__switch'))
        {
        [...switchEl.children].forEach((el) => { el.classList.remove('select') })
        switch_el.target.classList.add('select');
        tabs[0].classList.remove('no__checked');
        tabs.forEach((tab) => {
            tab.style.display = "none";
            if(switch_el.target.id == tab.id){
                tab.style.display = "flex";
                tab.classList.remove('no__checked');
            }
        })
    }
    // Complete()
    IsElementsChecked()
}));


const enterButton = document.querySelector('button');

function IsElementsChecked(){
    const unchecked_elements = document.querySelectorAll('.no__checked')
    if(unchecked_elements.length == 0)
        {
          enterButton.disabled = false;
        }
}





















