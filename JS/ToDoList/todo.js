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
        
        todos.forEach(todo => {                             // todos Array'ini gezerek Array içerisindeki tüm verileri fonksiyona atama yapıyor.
        liFunc(todo)
        })
    }
}

function newElement (event) {
    event.preventDefault()
    todoText = taskDom.value

let todo = {
    text: todoText ,
    isCompleted: false ,
    isActive: true ,
}

    const todos = JSON.parse(localStorage.getItem("todos"))    // todos 'u ARREY olarak localstorage'dan çekiyoruz.

    if (Boolean(taskDom.value.trim()) == true) {
        todos.push(todo);
    }                                     
    localStorage.setItem("todos" , JSON.stringify(todos))       // Yeni veriyi tekrar localstorage'a kaydediyoruz.

    if (Boolean(taskDom.value.trim()) == true) {                // trim sağ ve soldaki boşlukları siliyor. Boolean ile value olup olmadığını kontrol ediyoruz.
        liFunc(todo)                                        // todos Arrey'ine yeni veriyi ekliyoruz.
        $('.success').toast('show')        
    } else {
        $('.error').toast('show')
    }
}

function liFunc (girdi) {
    let listDom = document.querySelector("#list")
    let liDom = document.createElement("li")
    liDom.textContent = girdi.text
    liDom.isCompleted = girdi.isCompleted
    liDom.isActive = girdi.isActive
    listDom.append(liDom)
// Li elementine check classı tanımlanıyor.
    liDom.addEventListener("click" , liCheck)

    function liCheck() {
        liDom.isActive = false
        liDom.classList.toggle("checked")
    }

// Li elementine X tuşu tanımlanıyor.
    let removeXBtn = document.createElement("span")
    let spanText = document.createTextNode("\u00D7")
    removeXBtn.appendChild(spanText)
    removeXBtn.classList.add("close")
    removeXBtn.isCompleted = liDom.isCompleted

    liDom.appendChild(removeXBtn)

    removeXBtn.addEventListener("click" , removeFunc)

    function removeFunc() {
        liDom.isCompleted = true
        liDom.remove()
        $('.check').toast('show')

// Bu BÖLÜME BAKILACAK!
        /*
        const todo1 = liDom.textContent

        let todos = JSON.parse(localStorage.getItem("todos"))   // TODOS Array'ini localstorage'dan geri çekiyoruz.
        todos = todos.filter(td => td.text != todo1)

        function tdFunc(td) {
           return td.text !== todo1
        }
        
        localStorage.setItem("todos" , JSON.stringify(todos))
        */


    }
}

/*
let dizi = [2,5,8,11,15,17];

let dizi1 = dizi.filter(fufi)

function fufi (value) {
    return value>10;
}

let dizi2 = dizi1.map(fufi1)

function fufi1(value) {
    return value*5;
}


function myfunction() {
    console.log(dizi2)
}

myfunction();
*/


