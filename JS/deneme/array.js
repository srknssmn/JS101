// ****** ARRAY KONUSUNA GİRİŞ ******




// ***** ARRAY KOPYALAMAK *****
let Array1 = [1,2,3,4,5]
let Array2 = [...Array1]

console.log(Array1)
console.log(Array2)

Array2.push("Sikko" , "Sikkonat")
console.log(Array1)
console.log(Array2)

// *********** FOR EACH ***********
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
let listDom = document.querySelector("#list")

PRODUCTS.forEach(newFunction)
function newFunction(bilgi) {               // bilgi PRODUCTS Arrey'indeki içerikler
    let liDOM = document.createElement("li")
    liDOM.innerHTML = bilgi
    listDom.prepend(liDOM)
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

// **************** MAP KOMUTU - MAP ile ARRAYİ İSTEDİĞİMİZ GİBİ DEĞİŞTİREBİLİYORUZ ****************
// https://www.w3schools.com/jsref/jsref_obj_array.asp

let USER_NAMES = ["AYSE" , "Mehmet" , "ASLi" , "tugce"]

let NEW_USER_NAMES = USER_NAMES.map(userNamesFunc)
function userNamesFunc(user) {
    return user.toLowerCase()
}
console.log(NEW_USER_NAMES)

// MAP İLE ARRAY'İN KOMPLE YAPISINI DEĞİŞTİRME

let usersInfo = [
    {fullName: "Ayse" , lastName: "Ciguli"},
    {fullName: "Serdar" , lastName: "Ciguli"},
    {fullName: "Erhan" , lastName: "Ciguli"},
    {fullName: "Merve" , lastName: "Ciguli"}
]

let newUserInfo = usersInfo.map(infoFunc)
function infoFunc(element) {
    return `${element.fullName} ${element.lastName}`
}

console.log(usersInfo)
console.log(newUserInfo)

// ***** MAP İLE STRINGLERİ INT DÖNÜŞTÜRMEK

let stringArr = ["1", "2", "3"]
let newstringArr = stringArr.map((str) => parseInt(str))
console.log(stringArr)
console.log(newstringArr)

// ***** JOIN İLE ARRAY'İ STRING'E DÖNÜŞTÜRMEK

let arrayExp = ["araba" , "tekne" , "ucak"]
let arrayExpStr = arrayExp.join()

console.log(arrayExp)
console.log(arrayExpStr)

let arrayExpStr1 = arrayExp.join(" ve ") // Stringe dönüştürürken, aralara yeni eleman eklemek
console.log(arrayExpStr1)

// ***** FROM İLE NORMAL VERİYİ ARRAY'E DÖNÜŞTÜRMEK

let stringExp = "ABCDEF"
let stringExpArr = Array.from(stringExp)

console.log(stringExp)
console.log(stringExpArr)

// ***** ARRAY'İ OBJECT'E DÖNDÜRMEK!!!
// RETURN İÇİNDE OBJECT OLARAK BELİRTMEK!!!
let NEW_USER_NAMES1 = USER_NAMES.map(userNamesFunc1)
function userNamesFunc1(item) {
    return {
        userName: item ,  shortName: `${item[0].toUpperCase()}.` , newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()} `
    }
}
console.log(NEW_USER_NAMES1)

// OBJECT VE ARRAY MAP ÖRNEĞİ BİRLİKTE KULLANIM

let objectEx = {
    carNames: ["dogan" , "sahin" , "kartal" , "tempra"] , 
    carSells: [1950,1960,1970,1980]
}

let objectMap = objectEx.carSells.map(mapFunc)  // Array Map Örneği
function mapFunc(item){
   return item/2
}
console.log(objectMap)

// ARRAY İÇERİSİNDE BENZER OLAN ELAMANLARI AYIKLAMAK ve ELEMAN EKLEMEK

let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

let uniqueAgeGroup = ageGroup.reduce(function (array, value) {
  if (!(array.includes(value))) {
    array.push(value);
  }
  return array;
},[]);  // En sonda boş [] koymak gerekiyor veya [] içerisine yeni value de atayabiliriz.

console.log(uniqueAgeGroup)

let uniqueAgeGroup1 = ageGroup.reduce(function (komple, eleman) {
    if (!(komple.includes(eleman))) {
        komple.push(eleman);
    }
    return komple;
  },["newAge" , "newAge2" , 33 , 34]);
  
  console.log(uniqueAgeGroup1)