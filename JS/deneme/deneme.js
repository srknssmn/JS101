// alert("alert")
// prompt("Adın Ne?")

// let siksok = document.querySelector('#sik')

// siksok.innerHTML="Hassiktir"

// let ass = prompt("What's this?")

// let goo2 = document.querySelector('#li2')

//goo2.innerHTML = ass


let serverName = "www.siksok.com"

let gooo = document.querySelector('#tag1')

gooo.innerHTML = serverName

let goo1 = document.querySelector('#li1')

goo1.innerHTML = "Sikko"

/**
let userName = "seko"

let isUserName = Boolean(userName)

console.log(isUserName)

let price = 111
let price1 = "111.12"
let isPrice = true

// STRING to NUMBER
console.log(typeof(price))
console.log(typeof(price1))
console.log(typeof(isPrice))

console.log("ilk çıktı:" + typeof(price1))
price1 = Number(price1)
console.log("ikinci çıktı:" + typeof(price1))
console.log(typeof(price1))

// NUMBER to STRING

console.log("ilk çıktı:" + typeof(price))

price = price.toString() // toString() 

console.log("ikinci çıktı:" + typeof(price))

// STRING İŞLEMLERİ

let firstName = "serkan"
let lastName = "ŞİŞMAN"
let email = "srkn@gmail.com"

console.log(firstName)
console.log(firstName.length) // Kelimenin uzunluğunu bulmak
console.log(firstName[0]) // Kelime içerisinde karakter bulmak

firstName = firstName.toUpperCase() // Kelimeyi komple büyük harfe çevirmek
console.log(firstName)

firstName = firstName.toLowerCase() // Kelimeyi komple küçük harfe çevirmek
console.log(firstName)

console.log(email.search("@"))  // Kelima içerisinde bir harfin yerini bulmak
// console.log(email.search("w"))  // Kelimede olmayan harf aratılınca -1 sonucunu verir.
console.log(email[4])

console.log(email.slice(5 , 14))    // Kelime içerisinde belirli bir aralığı almak
console.log(email.slice(2)) // Kelime içerisinde belirli bir aralığa kadarını almak

let DOMAIN = email.slice((email.search("@") +1) )  // DOMAIN bulma örneği
console.log(DOMAIN)

// console.log(DOMAIN.indexOf("."))    // Nokta indexOf ile aranıyor.
console.log(DOMAIN.slice(0 , DOMAIN.indexOf(".")))  // Sadece DOMAIN kısmını almak

email = email.replace("gmail.com" , "yahoo.com")    // Kelime içerisindeki bilgiyi değiştirmak.
// email = email.replace(DOMAIN , "yahoo.com")
console.log(email)

// INCLUDES İLE KELİME İÇERİSİNDE BİLGİ OLUP OLMADIĞINI ARAMAK
console.log(firstName.includes("sıtkı"))     // false döner
console.log(firstName.includes("serkan"))    // true döner

// Kelimenin ilk Harflerini Büyük Yapmak

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)
 */

// ***************** DOCUMENT İŞLEMLERİ ******************************

// document.body
// document.head
// document.URL
// document.location
// document.location.pathname

document.body.style.backgroundColor = "grey" // document bilgisine ulaşıp, değiştirmek.

console.log(document.body.style.backgroundColor)

console.log(document.querySelector(".tit").innerHTML)
console.log(document.querySelector("#title").innerHTML)

document.querySelector(".tit").innerHTML = "Merhaba YENİ"
document.querySelector("#title").innerHTML = "Merhaba Dünya YENİ"

console.log(document.querySelector(".ul>li#li1").innerHTML)

// ***** KULLANICIDAN BİLGİ ALMAK ******

/** 
let name1 = prompt("Adınız nedir?") // Prompt ile bilgi almak

console.log(name1)

document.querySelector('#li2').innerHTML = name1    // Kullanıcıdan alınan bilgiyi ekrana yazdırmak

document.querySelector('#li3').innerHTML = ` <small style="color:red"> ${name1} </small> ` // Style verebiliyoruz

*/

// **************  LİSTE İÇERİSİNDEKİ ELEMANLARA ULAŞMAK ve DEĞİŞTİRMEK  ***************

let firstChild = document.querySelector("ul#list>li:first-child") // İLK ÖĞEYE ULAŞMAK
let lastChild = document.querySelector("ul#list>li:last-child") // SON ÖĞEYE ULAŞMAK

firstChild.innerHTML = "İlk öğe değişti"    // İLK ÖĞEYİ DEĞİŞTİRMEK
lastChild.innerHTML = "Son öğe değişti"     // SON ÖĞEYİ DEĞİŞTİRMEK

let ulDOM = document.querySelector("ul#list")

let liDOM1 = document.createElement('li')    // Yeni li öğesi oluşturma
liDOM1.innerHTML = "Kendi oluşturduğum ilk öğe"  // li öğesine veri girme
let liDOM2 = document.createElement('li')    // Yeni li öğesi oluşturma
liDOM2.innerHTML = "Kendi oluşturduğum son öğe"  // li öğesine veri girme

ulDOM.prepend(liDOM1)    // Yeni li öğesini ul listesinde EN BAŞA eklemek
ulDOM.append(liDOM2) // Yeni li öğesini ul listesinde SONA eklemek

// **************  CSS CLASS BİLGİSİNE ULAŞMAK ve DEĞİŞTİRMEK  ***************

let greetings = document.querySelector("#greetings")

greetings.classList.add("text-ass" , "title" , "ciglipuff") // CLASS EKLEMEK
greetings.classList.remove("ciglipuff") // CLASS SİLMEK

console.log(greetings.classList)

// **************  KARŞILAŞTIRMA OPERATÖRLERİ  ***************

let pricee = "100";
let personel = "serkan";

console.log(pricee == 1)        // Eşit mi?
console.log(pricee == 100)

console.log(pricee === 100)     // Hem değeri hem de türü eşit
console.log(pricee === "100")

console.log(pricee != 1)        // Eşit değilse

// ve   =   && 
pricee = 0
console.log(pricee == 0 && personel == "serkan")
console.log(pricee > 0 && personel == "serkan")

// veya =   ||
console.log(pricee > 0 || personel == "serkan")

// **************** IF - ELSE KOSUL KULLANIMI *******************

/**
let personelName = prompt("Kullanıcı adınızı yazın: ")
let password = prompt("Şifrenizi yazın: ")
let isPersonelName = document.querySelector('#greetings')
console.log(isPersonelName.innerHTML)
let count = 1;

if (personelName == "serkan" && password == "1234") {
    isPersonelName.innerHTML = "Sisteme giriş yaptınız."
} else if (personelName == "" || password == "") {
    isPersonelName.innerHTML = "Eksik Bilgi!"
} else {
    isPersonelName.innerHTML = "Yanlış Bilgi!"
}

*/

// TERNANY OPERATOR KULLANIMI:

// isPersonelName.innerHTML = (personelName == "serkan" && password == "1234") ? "Sisteme giriş yaptınız." : "Eksik Bilgi!"

// !!!!! FONKSİYONNNN DOCUMENTTT !!!!

function domClick(){
    console.log("İŞLEM YAPILDI!!")
    this.innerHTML = "İŞLEM YAPILDI!!" // Fonksiyon çalıştığında, içerideki bilgi değişecek!
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" // Kırmızı ve Siyah arasında geçiş!!
}
// this komutu işlem yapılan ID 'yi çağırır!!

let deneme = document.querySelector("#deneme")
let denemeInfo = document.querySelector("#info")
let denemeLi4 = document.querySelector("#li4")

// ****************** addEventListener iŞLEVİ **************

deneme.addEventListener("click" , domClick) // addEventListener görev ile Atama

denemeInfo.addEventListener("mouseover" , domClick) // addEventListener  görev ile Atama

denemeLi4.addEventListener("cut" , domClick) // addEventListener görev ile Atama


// deneme.onclick = domClick       // onclick işlevine FONKSİYON ATAMAK!!

// ****** ÇALIŞMA 1 *******************************************************

let counterDom = document.querySelector("#counter")
let arttir = document.querySelector("#arttir")
let azalt = document.querySelector("#azalt")

arttir.addEventListener("click" , function(){
    counterDom.innerHTML ++ ;
})

azalt.addEventListener("click" , function(){
    counterDom.innerHTML -- ;
})

/**
    function clickEvent() {
        if (this.id == "arttir"){
            counterDom.innerHTML ++ ;
        } else {
            counterDom.innerHTML -- ;
        }
    }
    
arttir.addEventListener("click" , clickEvent)
azalt.addEventListener("click" , clickEvent)
*/


// *********** LOCALSTORAGE İÇERİSİNE ÖĞE KAYDETMEK **************
localStorage.setItem ("go" , "Serka1n")
console.log(localStorage.getItem("go"))


let user = {userName: "Serkan" , isActive: true }
localStorage.setItem('userInfo1' , JSON.stringify(user))        // JSON.stringify ile setItem yapılır.
let userInfo1 = JSON.parse(localStorage.getItem('userInfo1'))   // JSON.parse ile getItem yapılır.
console.log(userInfo1)

let movies = ["kasaba" , "Kış"]

localStorage.setItem("Nuri Bilge Ceylan" , JSON.stringify(movies))

console.log(localStorage.getItem("Nuri Bilge Ceylan"))

// localStorage.clear() ---- Tüm localstroge silinir.

// ****** ÇALIŞMA 2 *******************************************************
// SAYACI LOCAL STORAGE İÇERİSİNE KAYDEDEREK ÇALIŞTIRMA!!!

let counter = localStorage.getItem("sayac") ? Number(localStorage.getItem("sayac")) : 0
let sayac = document.querySelector("#sayac")
let arttirma = document.querySelector("#arttirma")
let azaltma = document.querySelector("#azaltma")

sayac.innerHTML = counter

arttirma.addEventListener("click" , clickEvt)
azaltma.addEventListener("click" , clickEvt)

function clickEvt () {
    if (this.id == "arttirma") {
        counter ++
    } else {
        counter --
    }
    localStorage.setItem("sayac" , counter)
    sayac.innerHTML = counter
}

// **********************************************************************************************
