
let formDom = document.querySelector("#userForm")

formDom.addEventListener("submit" , formFunc1)

function formFunc1(event) {
    event.preventDefault()

    let submitForm = document.querySelector("#denemeInput")
    let girdi = document.querySelector("#text")
    girdi.innerHTML = submitForm.value

}