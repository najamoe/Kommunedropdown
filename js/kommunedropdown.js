console.log("jeg er i kommunedropdown")

const urlKommune = "https://api.dataforsyningen.dk/kommuner";

pbFetchKommuner = document.getElementById("pbFetchKommuner")
const ddKommuner = document.getElementById("ddKommuner")
const divTag = document.getElementById("atags")

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return  fetch(url).then(response => response.json());
}

function fillDropdownObj(item) {
    const el = document.createElement("option")
    console.log(item)
    el.textContent = item.navn
    el.value = item  //item bliver til string
    el.kommune = item
    ddKommuner.appendChild(el);
}

function inputChanged(key) {
    const selindex = ddKommuner.selectedIndex;
    const selectedOption = ddKommuner.options[selindex];
    const kommune = selectedOption.value
    console.log(kommune)
    const kom2 = selectedOption.kommune
    console.log(kom2)
    createATag(kom2)
}

async function fetchKommuner(urlKommune) { //async means a functions always returns a promise (promise = pending, fulfilled, rejected)
    let kommuneArr = await fetchAnyUrl(urlKommune) //Await only works in async functions, makes js wait until the promise settles and returns the result
    console.log(kommuneArr)
    ddKommuner.innerHTML = ""
    kommuneArr.forEach(fillDropdownObj)
}

function actionFetch() {
    const kommuner = fetchKommuner(urlKommune);
    console.log(kommuner)
}

function divtag(komObj){
    console.log(komObj)
    //insert inputfield to dropdown screen
    const aTag = document.createElement("atag")
    aTag.setAttribute(href, komObj.href)
    //add listener to the field (done at the end under other eventlisteners)
    //when input changes, check datastructure to check if the komobj exists

}


pbFetchKommuner.addEventListener('click', actionFetch)
ddKommuner.addEventListener('change', inputChanged)
divTag.addEventListener('click', inputChanged)