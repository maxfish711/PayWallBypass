async function detectButtonPress(){
    var inputValue = document.getElementById("input1").value
    var tabs = await chrome.tabs.query({
        active : true,
        currentWindow : true
    })
    var tabid = tabs[0].id
    console.log(inputValue)
    chrome.scripting.executeScript({target:{tabId: tabid}, func : deletingKeyWord, args : [inputValue]})
}

function deletingKeyWord(a){
    var targetElement = document.getElementsByClassName(a)
    while(targetElement.length > 0){
    console.log(targetElement)
    for (var i = 0; i < targetElement.length; i++){
        targetElement[i].classList.remove(a)
    }
    targetElement = document.getElementsByClassName(a)
    }

}

document.getElementById("button1").onclick = detectButtonPress

