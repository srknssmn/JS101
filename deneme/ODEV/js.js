let tasks = []

let taskDom = document.querySelector("#task")
let liveToastBtn = document.addEventListener("onclick" , newElement)


/// SAYFA AÇILDIĞINDA OTOMATİK YAPILACAKLAR!!!
/*
html: onload= "startConf()"

const startConf = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) 
    if (!todos) {
        localStorage.setItem("todos" , JSON.stringify([]))
    } else {
        let newLi = document.createElement("li")
        newLi.textContent = todos
        listDom.prepend(newLi)
    }
}
*/

function newElement() {

    if (taskDom.value && (taskDom.value.length>0) && !(taskDom.value == " ")) {      
        addLi(taskDom.value)

        $('.success').toast('show') // toast Alert
    } else if ((taskDom.value.length<1) || (taskDom.value == " ")) {
        $(".error").toast("show");
    } 
}

let listDom = document.querySelector("#list")

function addLi(veri) {

    let newLi = document.createElement("li")
    newLi.textContent = veri
    listDom.prepend(newLi)

    // Li elementine check classı tanımlanıyor.
    newLi.addEventListener("click" , girdiFunc)
    function girdiFunc() {
        newLi.classList.toggle("checked")   // checked classı style.css 'de tanımlanmış.
    }

    // removeBtn adında span tanımlayıp içerisine "x" tuşu ataması yapılıyor..
    let removeBtn = document.createElement("span");
    let txt = document.createTextNode("\u00D7");    // x tuşu text olarak yapılıyor.
    removeBtn.appendChild(txt)
    removeBtn.classList.add("close") // close classı style.css 'de tanımlanmış.

    newLi.appendChild(removeBtn)
    removeBtn.addEventListener("click", removeItem);
    function removeItem() {
        newLi.remove(); // SİLME KOMUTU
    } 
}

let allLi = document.querySelectorAll("li")
allLi.forEach(liFunc)

function liFunc (girdi) {
    girdi.addEventListener("click" , girdiFunc)
    function girdiFunc() {
        girdi.classList.toggle("checked")   // checked classı style.css 'de tanımlanmış.
    }

    let removeBtn = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    removeBtn.appendChild(txt)
    removeBtn.classList.add("close");   // close classı style.css 'de tanımlanmış.

    girdi.appendChild(removeBtn)
    removeBtn.addEventListener("click", removeItem);
    function removeItem() {
        girdi.remove();
    } 
}