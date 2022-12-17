
let formDomm = document.querySelector("#userFormm")

// BU İŞLEMİ BROWSERDA SUBMİT KAYDI ALMAMAK İÇİN YAPIYORUZ!!!
formDomm.addEventListener("submit" , formHandler)
function formHandler(event) {
    event.preventDefault()  // preventDefault ile submitin default işlemi engelleniyor.
    console.log("işlem gerçekleşti")
    const USER_NAME = document.querySelector("#usernamee")
    const SCORE = document.querySelector("#scoree")
    const ALERT = (title , message , classname) => `<div class="alert alert-${classname} alert-dismissible fade show mb-0" role="alert">
    <strong> ${title} </strong>  ${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
    let alertDom = document.querySelector("#alert1")
    
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value,SCORE.value)
        alertDom.innerHTML = ALERT (
            "Tebrikler!" , "Bilgileriniz Kaydedildi.." , "success"
        )
    } else {
        alertDom.innerHTML = ALERT (
            "UYARI!" , "Eksik Bilgi Girdiniz.." , "danger"
        )
    }
    
}

let userListDom = document.querySelector("#userList")

function addItem (userName , score){
    let liDom = document.createElement("li")
    liDom.innerHTML = ` 
    ${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDom.classList.add("list-group-item" , "d-flex" , "justify-content-between" , "align-items-center")
    userListDom.append(liDom)
}