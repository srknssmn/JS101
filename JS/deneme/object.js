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

let textDom = document.querySelector("#text")

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
    textDom.innerHTML = carArr[carCounter].carINFO() // HTML SAYFASINA info bilgisini YAZDIRMA!!

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