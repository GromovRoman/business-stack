var oTabsTitel;
var oTabsContent;

window.addEventListener("load", function() {
    oTabsContent = document.getElementsByClassName("tab__text");
    oTabsTitel = document.getElementsByClassName("tab__button");
    hideTabsContent(1);
});

function hideTabsContent(iValue) {
    for (var i = iValue; i < oTabsContent.length; i++){
        oTabsContent[i].classList.remove("tab__text_show");
        oTabsContent[i].classList.add("tab__text_hide");
        oTabsTitel[i].classList.remove("tab__button_active");
    }
}

document.getElementById("tab-button").onclick = function(oEvent) {
    var oTarget = oEvent.target;
    if (oTarget.className == "tab__button"){
        for (var i = 0; i < oTabsTitel.length; i++){
            if (oTarget == oTabsTitel[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(iVaue) {
    if (oTabsContent[iVaue].classList.contains("tab__text_hide")) {
        hideTabsContent(0);
        oTabsTitel[iVaue].classList.add("tab__button_active");
        oTabsContent[iVaue].classList.remove("tab__text_hide");
        oTabsContent[iVaue].classList.add("tab__text_show");
    }
}