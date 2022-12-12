
let denemeDom = document.querySelector("#deneme")
denemeDom = addEventListener( "submit" , denemeFunc )
let arrayDeneme = [1, 2]

function denemeFunc(event){
    event.preventDefault()
    let inputDeneme = document.querySelector("#inputdeneme")
    let inputDeneme2 = document.querySelector("#denemeText")
    let girdi = document.querySelector("#yazi")
    let girdi2 = document.querySelector("#yazi2")
    let renk = document.querySelector("#exampleColorInput")
    let renk2 = document.querySelector("#exampleColorInput1")
    girdi.innerHTML = inputDeneme.value
    girdi.style.color = renk.value
    girdi2.innerHTML = inputDeneme2.value
    girdi2.style.color = renk2.value
    arrayDeneme.push(inputDeneme.value , inputDeneme2.value)     // GİRDİYİ DİZİ İÇERİSİNE ALMAK
    console.log(arrayDeneme)
} 

let namee = "Serhio"
let items = [1, 2, 3, 4, namee , 4 , 6]

document.querySelector("#info").innerHTML = items.length
let emptyArray = []

// ARRAY in İLK ELAMANINA ULAŞMAK
console.log(items[0])

// ARRAY in SON ELAMANINA ULAŞMAK
console.log(items[items.length - 1])

// ARRAY in TAM ORTASINDAKİ ELAMANA ULAŞMAK
console.log(items[Math.floor(items.length / 2)])

// DEĞİŞKENİN ARRAY OLUP OLMADIĞINA BAKMAK

console.log(
    typeof(items)   // Object çıktısı verir
)

console.log(
    Array.isArray(items)
)

// ARRAY SONUNA ELEMAN EKLEMEK
items.push(50)
console.log(items)

// ARRAY BAŞINA ELEMAN EKLEMEK
items.unshift(10)
console.log(items)

// ARRAY SONUNDAKİ ELEMANI ÇIKARMAK
let lastItem = items.pop() // SON ELEMANI ATARAK lastItem içerisine ekler
console.log(items)
console.log(lastItem)

// ARRAY BAŞINDAKİ ELEMANI ÇIKARMAK
let firstItem = items.shift() // SON ELEMANI ATARAK firstItem içerisine ekler
console.log(items)
console.log(firstItem)

// ARRAY İÇERİNE ARRAY

let liste = [1, 2, 3, 4, 5]

let femaleUsers = ["Ayse" , "Esra" , "Merve"]
let maleUsers = ["Ali" , "Serdar" , "Metin"]

liste.unshift(femaleUsers)  // BAŞA EKLEME
liste.push(maleUsers)  // SONA EKLEME

console.log(liste)
console.log(liste[0]) // İLK ÖĞEYE ULAŞMAK yani FEMALE ARRAY'e
console.log(liste[0][0])    // İLK ÖĞEYE OLAN FEMALE ARRAY'in İLK ÖĞESİNE ULAŞMAK

// ARRAY İÇERİSİNDEN BİR BÖLÜMÜ AYIRMAK

let yeniListe = liste.splice(1, 5)
console.log("Yeni Liste: " , yeniListe)
console.log("Eski Liste: " , liste)

yeniListe.push("hoppa")
console.log(yeniListe)

console.log (yeniListe.indexOf("hoppa"))    // Arrayde öğenin yerini bulmak.

// ARRAYDEN BİR TANE DAHA KOPYALAMAK!!
let copyListe = yeniListe.slice()   //
console.log(copyListe)

copyListe.pop()     // SADECE KOPYA ARRAYDEN ÖĞE SİLDİ
console.log(copyListe)

let copyListe2 = [...yeniListe]     // ES6 SONRASINDA GELEN KOPYALAMA YÖNTEMİ
console.log(copyListe2)

let copyListe3 = [...femaleUsers, ...maleUsers]
console.log(copyListe3)



// ******************** FOR DÖNGÜSÜ ********************

let users = ["Lorem" , "ipsum" , "dolor" , "---"]

/*
for ( let index = 0; index < 10 ; index++) {
    console.log(index)
}
*/

let userListDom = document.querySelector("#userList")


for ( let i = 0 ; i < users.length ; i++ ) {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = users[i]
    userListDom.append(liDOM)
}


// *********** BREAK (BİTİRME KOMUTU) **** CONTINUE (ATLAMA KOMUTU) ***********

let loremList = ["Lorem" ,"ipsum" , "dolor" , "sit" , "amet" , "consectetur" , "adipisicing"]

// BREAK
for (i=0 ; i <10 ; i++) {
    console.log(i)
    if (i===5) {break}
}

// Continue
for (i=0 ; i <10 ; i++) {
    if (i===5) {continue} // 5'i görünce devam etti (ATLADI)
    console.log(i)
}

for ( i=0 ; i < loremList.length ; i++ ) {

    if (loremList[i] == "sit") {continue}
    let li1 = document.createElement("li")
    li1.innerHTML = loremList[i]
    userListDom.append(li1)
}



// *********** WHILE KOMUTU ***********

let counter = 0;
while (counter < 10) {
    console.log(counter)
    counter ++
}

/*
let keko;

while (!(100>keko>0)) {
    keko = prompt("0 ile 100 Arasında Bir Sayı Giriniz:")
}
*/

// *********** FOR EACH (ARRAYLER İÇİN KULLANILIR)  ***********
// FOREACH KOMUTUNUN İÇERİSİNE 3 BİLGİ GİRİLEBİLİR: BİLGİ + İNDEX ve ARRAY

const PRODUCTS = ["Laptop" , "Phone" , "Speaker" , "Desktop PC" , "Server" , "Mouse" , "Keyboard"]

PRODUCTS.forEach(myFunction)
// FOREACH Function içerisinde BİLGİ, İNDEX NUMARASI ve ARRAYİN KENDİSİ GÖSTERİLEBİLİR!
function myFunction (item, index , arr) {
    console.log( item, index , arr)
}

// İSİMSİZ FONKSİYON OLUŞTUR VE İÇERİSİNE ATAMA YAP
PRODUCTS.forEach((item, index, array) => console.log(item, index, array))

// FOREACH İLE ARRAYİ SEÇİP ATAMA YAPMAK
PRODUCTS.forEach(newFunction)
function newFunction(bilgi) {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = bilgi
    userListDom.append(liDOM)
}

// ARRAY İÇERİSİNE FOREACH İLE KOŞULLU ELEMAN EKLEMEK
let PRODUCTS1 = []
PRODUCTS.forEach(ifFunction)

function ifFunction(item) {
    if (item.length>7) {
        PRODUCTS1.push(item)
    }
}

console.log(PRODUCTS1)

// ****** FİLTRE KULLANIMI ******
// filter fonksiyon içerisinde return ile kullanılıyor.

const NEW_PRODUCTS = PRODUCTS.filter(filtreFunction)

function filtreFunction(item) {
    return item.length>5
}
console.log(NEW_PRODUCTS)

// FİLTRE için ÖRNEK:

let USERSS = [
    {fullName: "Ayse Ciguli" , isActive: false , tag: "defi"},
    {fullName: "Serdar Ciguli" , isActive: true , tag: "gamefi"},
    {fullName: "Erhan Ciguli" , isActive: true , tag: "defi"},
    {fullName: "Merve Ciguli" , isActive: false , tag: "gamefi"},
]

let USERSS1 = USERSS.filter(usersFunction)
let sayac = 0;
// Not: fonksiyon 4 kere çalıştı.

function usersFunction(item) {
    console.log("AA")
    return item.isActive === false // item.isActive default olarak true döndürür.
}
console.log(USERSS1)

// FARKLI ÖRNEK
let tagDeneme = USERSS.filter(tagFunction)

function tagFunction(item) {
    console.log("BB")
    return item.tag == "defi"
}
console.log(tagDeneme)

// **************** MAP KOMUTU - MAP ile DIŞARIDAN ARRAYİ DEĞİŞTİREBİLİYORUZ ****************

let USER_NAMES = ["AYSE" , "Mehmet" , "ASLi" , "tugce"]

let NEW_USER_NAMES = USER_NAMES.map(userNamesFunc)
function userNamesFunc(user) {
    return user.toLowerCase()
}
console.log(NEW_USER_NAMES)

let NEW_USER_NAMES1 = USER_NAMES.map(userNamesFunc1)
// RETURN İÇİNDE OBJECT OLARAK BELİRTMEK!!!
function userNamesFunc1(item) {
    return {
        userName: item ,  shortName: `${item[0].toUpperCase()}.` , newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()} `
    }
}
console.log(NEW_USER_NAMES1)

// OBJECT VE ARRAY MAP ÖRNEĞİ BİRLİKTE KULLANIM
/*
let objectMap = objectEx.carSells.map(mapFunc)  // Array Map Örneği

function mapFunc(item){
   return item/2
}
console.log(objectMap)
*/

// ************ OBJECT ************
/*
let object = {
    key: value
}
*/
let objectEx = {
    carName: "Dogan" ,
    carYear: 3 ,
    carSells: [1972 , 1975 , 1988 , 2004]
}

objectEx.class = "SLX" // Object içerisine sonradan veri eklemek.

console.log(objectEx)
console.log(objectEx.carName)
console.log(objectEx.carYear)
console.log(objectEx.carSells)
console.log(objectEx.carSells[1])

// OBJECT KALITIM MİRAS ALMA
let objectEx2 = Object.create(objectEx) // ObjectEx 'den kalıtımı MİRAS olarak aldı.
objectEx2.underClass = "5AR"    // objectEx2'e yeni özellik eklendi.

console.log(objectEx2)

// OBJECT KEY ve VALUE

let laptop = {
    brand: "Apple" ,
    model: "MacBook Pro" ,
    kg: 2
}
console.log(laptop.brand)
console.log(laptop["brand"])    // Farklı kullanım yöntemi

laptop.version = "10.15.7"

console.log(Object.keys(laptop))    // Object Keys verilerine ulaşmak
console.log(Object.values(laptop))  // Object Value verilerine ulaşmak

let keys = Object.keys(laptop)  // Key değerlerini yeni bir listeye atamak.
console.log(keys)

let values = Object.values(laptop)
console.log(values)

keys.forEach(keyInfo => {
    console.log(keyInfo)           // forEach ile Key'e ulaşmak
    console.log(laptop[keyInfo])   // forEach ile Value'ya ulaşmak
})

values.forEach(valueInfo => {
    console.log(valueInfo)         // forEach ile Value'ya ulaşmak
})

// KARMAŞIK OBJECT İŞLEM ÖRNEĞİ

let userInfo = {

    names: [
        {Name: "Serkan" , Age: 36 , favoriteColor: "Black"} ,
        {Name: "Serdar" , Age: 36 , favoriteColor: "Pink"} ,
        {Name: "Metin" , Age: 36 , favoriteColor: "Purple"}
    ] ,

    setting: {
        version: "1.0.5" , 
        DNS: "105.xx.xx.xx"
    }
}

console.log(Object.keys(userInfo))      // userInfo Object Keys verilerine ulaşmak
console.log(Object.values(userInfo))    // userInfo Object Values verilerine ulaşmak
console.log(userInfo.names[0].Name)     // userInfo names Keyindeki Arrey içerisindeki Name keyinin value'suna ulaşmak
console.log(userInfo.setting.version)

console.log(Object.keys(userInfo.names[0])) // userInfo names Key'inin içerisindeki ilk Array'in Key verilerine ulaşmak
console.log(Object.values(userInfo.names[0])) // userInfo names Key'inin içerisindeki ilk Array'in Values verilerine ulaşmak

// OBJECT İÇERİSİNDE METOT VE FUNCTION TUTMAK

let userCatalog = {
    userName: "Sikko" , 
    surName: "Cuma" ,
    score: [3,4,8,12] ,
    isActive: true ,
    // İçeride fonk. tanımlarken "this" kullanılabilir.
    shortname: function() {return `${this.userName[0].toUpperCase()}. ${this.surName[0].toUpperCase()}.`} , 
    kekoFunc: keko()
}

function keko() {
    return "Kekonat"
}

console.log(userCatalog)
console.log(userCatalog.shortname())

//OBJECT İÇERİSİNDEN BAZI BİLGİLERİN ALINMASI VE KALANININ YENİ OBJECT İÇERİSİNE ATANMASI

let {userName,surName, ...newuserCatalog } = userCatalog  // Object Dağıtmak
// ... ile yeni bir object içerisine atılıyor.

console.log(userName , surName) // Object içerisinden çıkarttık
console.log(newuserCatalog) // Object içerisinden ayırarak farklı bir Object'e kaydettik

// HATALI!!! BU ŞEKİLDE KOPYALAMA YAPILMAZ!!!
// let userCatalog2 = userCatalog
// userCatalog2.userName = "Değişti"

let userCatalog2 = {...userCatalog} // OBJECT KOPYALAMAK

userCatalog2.userName = "Değişti"   // Sadece kopya içerisindeki bilgi değişti.

console.log(userCatalog)
console.log(userCatalog2)

let score =[100,200,300,400]

let [score1 , score2, ...otherScores] = score   // Array Dağıtmak
// ... ile yeni bir object içerisine atılıyor.
console.log(score1) // Array içerisinden çıkarttık
console.log(score2) // Array içerisinden çıkarttık
console.log(otherScores)    // Array içerisinden ayırarak farklı bir Array'e kaydettik

let scoreAr = [...score]    // Array Kopyalamak

//  ÖRNEK

function ornek (arabaAdi, arabaModeli, ArabaYasi) {

}

// ***** OBJECT KULLANARAK BİR ÇOK YENİ NESNE ATAMA ÖRNEĞİ *****
let CAR = {
    carName: this.carName , 
    carModel: this.carModel ,
    carYear: this.carYear ,
    carINFO: function() {
        return `${this.carName} ${this.carModel} ${this.carYear}`
    }
}

console.log(CAR.carINFO())

// FONKSİYON İLE METODU ÇOĞALTMA!!!

let kekonat = document.querySelector("#kekonat")

let carArr = []
let carCounter = 0

function X(isim,carName,carModel,carYear ) {
    isim = {...CAR} // İlk olarak Car metodunu kopyalıyoruz.
    isim.carName = carName
    isim.carModel = carModel
    isim.carYear = carYear
    console.log(isim.carINFO())
    console.log(isim.carName , "carArr Array'inde" , carCounter, ". indexteki Araba" ) // Fonksiyona tanımlanan arabaların indexi
    carArr.push(isim)   // Fonksiyona gelen bilgileri carArr ARRAY'ine metod olarak ekliyoruz.
    kekonat.innerHTML = carArr[carCounter].carINFO() // HTML SAYFASINA info bilgisini YAZDIRMA!!

    carCounter ++  // Fonksiyona gelen bilgileri indexliyoruz.
}

X("kartal" , "Kartal" , "SLL" , 1986 ); // X Fonksiyonuna değer atayarak; CAR METODUNA veri giriyoruz.
X("tempra" , "Tempra" , "XXC" , 1987 );

// MANUEL KOPYALAMA İLE METODU ÇOĞALTMA!!!
let sahin = {...CAR}
sahin.carName = "Şahin"
sahin.carModel = "SL"
sahin.carYear = "1982"


// kekonat.innerHTML = sahin.carINFO()

console.log(sahin.carINFO())

let dogan = {...CAR}
dogan.carName = "Doğan"
dogan.carModel = "SLX"
dogan.carYear = "1985"

console.log(dogan.carINFO())

//***** OBJEYİ CURRENTTARGET İLE YÖNETMEK
let text1 = document.querySelector("#text1")

text1.addEventListener("click" , hide)
function hide(e) {
  e.currentTarget.style.visibility = 'hidden'
  console.log(e.currentTarget.style)
}
// VEYA
/*  function hide() {
  this.style.visibility = 'hidden'
  console.log(this.style)
}
*/