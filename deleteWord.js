async function detectButtonPress(){
    var inputValue = document.getElementById("input1").value
    var tabs = await chrome.tabs.query({
        active : true,
        currentWindow : true
    })
    var tabid = tabs[0].id
    console.log(inputValue)
    chrome.scripting.executeScript({target:{tabId: tabid}, files : ["Scripts.js"]})
}


document.getElementById("button1").onclick = detectButtonPress

