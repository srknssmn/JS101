/// SAYFA AÇILDIĞINDA OTOMATİK YAPILACAKLAR!!!
/* 
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

let formDom = document.querySelector("#form")
formDom.addEventListener("submit" , newElement )

function newElement(event) {
    event.preventDefault()
    let taskDom = document.querySelector("#task")

    if (Boolean(taskDom.value.trim()) == true) {    // trim sağ ve soldaki boşlukları siliyor. Boolean ile value olup olmadığını kontrol ediyoruz.
        liFunc(taskDom.value)
        $('.success').toast('show')        
    } else {
        $('.error').toast('show')
    }
}

function liFunc (girdi) {
    let listDom = document.querySelector("#list")
    let liDom = document.createElement("li")
    liDom.innerHTML = girdi
    listDom.append(liDom)

    liDom.addEventListener("click" , liCheck)
    function liCheck() {
        liDom.classList.toggle("checked")
    }

    let removeXBtn = document.createElement("span")
    let spanText = document.createTextNode("\u00D7")
    removeXBtn.appendChild(spanText)
    removeXBtn.classList.add("close")

    liDom.appendChild(removeXBtn)

    removeXBtn.addEventListener("click" , removeFunc)

    function removeFunc() {
        liDom.remove()
        $('.check').toast('show')
    }
}






