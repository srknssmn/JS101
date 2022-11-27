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
let taskDom = document.querySelector("#task")
formDom.addEventListener("submit" , newElement )

const startConf = () => {
    const todos = JSON.parse(localStorage.getItem("todos"))     // Page ilk açılışında todos 'u localstorage'dan çekiyoruz.
    
    if(!todos) {
        localStorage.setItem("todos" , JSON.stringify([]))  // Eğer sayfa ilk açılışında todos Arrey'i yoksa; Localstorage'a todos arreyini kayıt ediyoruz.
    } else {
        /*
        const result = todos.filter(checkValue);

        function checkValue(todoText) {
            return (Boolean(todoText.trim()) == true)
        }
        */
        todos.forEach(todoText => {                             // todos Array'ini gezerek Array içerisindeki tüm verileri fonksiyona atama yapıyor.
        liFunc(todoText)
        })
    }
}

function newElement (event) {
    event.preventDefault()
    todoText = taskDom.value

    const todos = JSON.parse(localStorage.getItem("todos"))    // todos 'u ARREY olarak localstorage'dan çekiyoruz.

    if (Boolean(taskDom.value.trim()) == true) {
        todos.push(todoText);
    }                                     
    localStorage.setItem("todos" , JSON.stringify(todos))       // Yeni veriyi tekrar localstorage'a kaydediyoruz.

    if (Boolean(taskDom.value.trim()) == true) {                // trim sağ ve soldaki boşlukları siliyor. Boolean ile value olup olmadığını kontrol ediyoruz.
        liFunc(todoText)                                        // todos Arrey'ine yeni veriyi ekliyoruz.
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
// Li elementine check classı tanımlanıyor.
    liDom.addEventListener("click" , liCheck)
    function liCheck() {
        liDom.classList.toggle("checked")
    }
// Li elementine X tuşu tanımlanıyor.
    let removeXBtn = document.createElement("span")
    let spanText = document.createTextNode("\u00D7")
    removeXBtn.appendChild(spanText)
    removeXBtn.classList.add("close")

    liDom.appendChild(removeXBtn)

    removeXBtn.addEventListener("click" , removeFunc)

    function removeFunc() {
        liDom.remove()
        $('.check').toast('show')

        // BU BÖLÜME BAKILACAK!!
        /*
        const todos = JSON.parse(localStorage.getItem("todos"))
        delete todos[3]
        localStorage.setItem("todos" , JSON.stringify(todos))
        */
    }
}






