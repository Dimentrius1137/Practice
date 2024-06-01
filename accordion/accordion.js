const accords = document.querySelectorAll('.acc__cont');
const enterButton = document.querySelector('button');

accords.forEach(accord => {

    accord.addEventListener('click', OpenTab)
})


 function OpenTab(el) {

    const tab = el.target.parentElement;
    const tab_content = tab.children[1];
    const arrow = el.target.parentElement.children[0].children[0];
    const accords_container = el.target.parentElement.parentElement.parentElement;

    if(el.target.classList.contains('tab__title'))
        {
            el.target.classList.remove('no__checked');
            if(!tab_content.classList.contains('open')){

                CloseTabs(accords_container);

                tab_content.classList.toggle('open');
                arrow.classList.toggle('rotate');
                tab.classList.toggle('acc__tab__border');
            }
            else{
                CloseTabs(accords_container);
            }
         
        }
        IsElementsChecked()
       

}


function CloseTabs(accord){
    const tabs = accord.querySelectorAll('.acc__tab')

    tabs.forEach((el) => {
            el.children[1].classList.remove('open');
            el.children[0].children[0].classList.remove('rotate');
            el.classList.remove('acc__tab__border');
        })

}

function IsElementsChecked(){
    const unchecked_elements = document.querySelectorAll('.no__checked')
    if(unchecked_elements.length > 0)
        {
            return false;
        }

    else{
        enterButton.disabled = false;
    }

}
