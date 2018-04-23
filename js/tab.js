var tabsTitel = document.getElementsByClassName("tab__button");
var tabsContent = document.getElementsByClassName("tab__text");

function hideTabsContent(tabIndex) {
    for (var i = tabIndex; i < tabsContent.length; i++){
        tabsContent[i].classList.remove("tab__text_show");
        tabsTitel[i].classList.remove("tab__button_active");
    }
}

document.getElementById("tab-button").addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('tab__button')){
        for (var i = 0; i < tabsTitel.length; i++){
            if (target == tabsTitel[i]){
                showTabsContent(i);
                break;
            }
        }
    }
});

function showTabsContent(tabIndex) {
    if (!(tabsContent[tabIndex].classList.contains("tab__text_show")) ){
        hideTabsContent(0);
        tabsTitel[tabIndex].classList.add("tab__button_active");
        tabsContent[tabIndex].classList.add("tab__text_show");
    }
}