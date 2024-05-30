const accord_tabs = document.querySelector('.acc__cont');
const enterButton = document.querySelector('button');


accord_tabs.addEventListener('click', (el) => {

    const tab_content = el.target.parentElement.children[1];
    const arrow = el.target.parentElement.children[0].children[0];
    const tab = el.target.parentElement;
    if(el.target.classList.contains('tab__title'))
        {
            el.target.classList.add('checked')
            if(!tab_content.classList.contains('open')){
                CloseTabs();
                tab_content.classList.add('open');
                arrow.classList.add('rotate');
                tab.classList.add('acc__tab__border');
            }
            else{
              
                tab_content.classList.remove('open');
                arrow.classList.remove('rotate');
                tab.classList.remove('acc__tab__border');
            }
        }

        CheckedTabs()

})


function CloseTabs(){

    [...accord_tabs.children].forEach((el) => {
        el.children[1].classList.remove('open');
        console.log(el.children[0].children)
        el.children[0].children[0].classList.remove('rotate');
        el.classList.remove('acc__tab__border');
    })

}

function CheckedTabs(){
    let open_tabs_counter = 0;

    [...accord_tabs.children].forEach((el) => {

        if(el.children[0].classList.contains('checked')){
            open_tabs_counter += 1;
        }
        else{
            return false
        }

    })

    if(open_tabs_counter >= 3){
        enterButton.disabled = false
    }

}
