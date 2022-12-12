
let tasks = []

let task = document.querySelector("#task")
let liveToastBtn = document.querySelector("#liveToastBtn")

liveToastBtn.addEventListener("click" , clickFunc)

function clickFunc(event) {
    event.preventDefault()

    if (task.value) {
        localStorage.setItem("todo" , JSON.stringify(task.value))
        addItem(task.value)
    } else {
        console.log("yarrak")
    }
}


let userListDom = document.querySelector("#list")

function addItem(girdi) {
    let liDom = document.createElement("li")
    liDom.innerHTML = girdi
    tasks.push(liDom)
    let removeBtn = document.createElement("span");
    removeBtn.classList.add("close");
    let txt = document.createTextNode("\u00D7");
    removeBtn.appendChild(txt)
    liDom.appendChild(removeBtn);
    removeBtn.addEventListener("click", removeItem);
    function removeItem() {
            liDom.remove();
    }

    liDom.addEventListener("click", selectItem);
    function selectItem(){
    liDom.classList.toggle("checked");
}
    for (i=0 ; i<tasks.length ; i++) {
        userListDom.prepend(tasks[i])
    }
}


const allLi = document.querySelectorAll("li")

    allLi.forEach(e => {
        e.addEventListener("click", selectItem)

        function selectItem(){
            e.classList.toggle("checked")
        }
        let removeBtn = document.createElement("span");
        removeBtn.classList.add("close");
        let txt = document.createTextNode("\u00D7");
        removeBtn.appendChild(txt)
        e.appendChild(removeBtn)
        removeBtn.addEventListener("click", removeItem);
        function removeItem() {
            e.remove();
            }
        }
    )

/*
function newElement() {
    console.log("GO GO GO")
    allLi.classList.add("ciguli")
}
*/

// https://github.com/furkanunutmaz/patikaToDoApp_js/blob/master/js/js.js

let alertt = document.querySelector("#liveToast")
