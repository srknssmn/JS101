
let formDom = document.querySelector("#userForm")

// BU İŞLEMİ BROWSERDA SUBMİT KAYDI ALMAMAK İÇİN YAPIYORUZ!!!
formDom.addEventListener("submit" , formSubmit)
function formSubmit(event) {
    event.preventDefault()  // preventDefault ile submitin default işlemi engelleniyor.
    console.log("işlem gerçekleşti")
    let scoreInput = document.querySelector("#score")
    console.log(scoreInput.value)   // Form içerisindeki veriyi value ile alıyoruz.
    localStorage.setItem("score" , scoreInput.value)    // Form içerisindeki veriyi localstorege bölümüne kaydediyoruz.
}
