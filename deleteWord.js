async function detectButtonPress(){
    inputValue = document.getElementById("input1").value
    var tabs = await chrome.tabs.query({
        active : true,
        currentWindow : true
    })
    var tabid = tabs[0].id
    chrome.scripting.executeScript({target:{tabId: tabid}, func : deletingKeyWord, args : [inputValue]})
}

async function litCharts(){
    inputValue = "blur"
    var tabs = await chrome.tabs.query({
        active : true,
        currentWindow : true
    })
    var tabid = tabs[0].id
    chrome.scripting.executeScript({target:{tabId: tabid}, func : deletingKeyWord, args : [inputValue]})

}

function deletingKeyWord(a){
    var targetElement = document.getElementsByClassName(a)
    while(targetElement.length > 0){
    for (var i = 0; i < targetElement.length; i++){
        targetElement[i].classList.remove(a)
    }
    targetElement = document.getElementsByClassName(a)
    }

}

document.getElementById("button1").onclick = detectButtonPress
document.getElementById("button2").onclick = litCharts


currentTab = ""
getCurrentTab()
function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
      if (chrome.runtime.lastError)
      console.error(chrome.runtime.lastError);
      // `tab` will either be a `tabs.Tab` instance or `undefined`.
    //   callback(tab);
        currentTab = tab
    });
  }
  console.log(currentTab.url)



