const tabs = document.querySelectorAll('.tab__content');
const switches = document.querySelector('.tab__switch__cont');

switches.addEventListener('click', (el) => Show(el));

function Show(switch_el){
    if(switch_el.target.classList.contains('tab__switch'))
        {
        [...switches.children].forEach((el) => { el.classList.remove('select') })
        switch_el.target.classList.add('select');
        tabs[0].classList.add('check');
        tabs.forEach((tab) => {
            tab.style.display = "none";
            if(switch_el.target.id == tab.id){
                tab.style.display = "flex";
                tab.classList.add('check');
            }
        })
    }
    Complete()

}


const enterBtn = document.querySelector('button');

function Complete() {

    let completed = false;
     tabs.forEach((el) => {
        completed = false;
        if(el.classList.contains('check')){
            completed = true
        }
    }) 

    if(completed){
       enterBtn.disabled = false
    }
    
}





















