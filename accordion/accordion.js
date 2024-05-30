const accords = document.querySelectorAll('.acc__cont');
const enterButton = document.querySelector('button');

accords.forEach(accord => {

    accord.addEventListener('click', OpenTab)
})


 function OpenTab(el) {

    const tab_content = el.target.parentElement.children[1];
    const arrow = el.target.parentElement.children[0].children[0];
    const tab = el.target.parentElement;

    const accords_container = el.target.parentElement.parentElement.parentElement;
    if(el.target.classList.contains('tab__title'))
        {
            el.target.classList.remove('no__checked');
            if(!tab_content.classList.contains('open')){

                
                CloseTabs(accords_container);

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
        IsElementsChecked()
       

}


function CloseTabs(accord){
    const tabs = accord.querySelectorAll('.acc__tab')

    console.log(tabs)
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
