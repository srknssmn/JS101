// DEGISKEN TANIMLAMA
//var serverName = "Go Go Go1";
//console.log(serverName);   EKRANA YAZDIRMA KOMUTU

//alert("MERHABA");   EKRANA UYARI MESAJI ÇIKARTMA!!

let serverName, password;
serverName = "Go Go Go";
password = 1;

serverName += " HEY";
password += 2;

console.log(serverName+ " "+password);


const SERVER_PASSWORD = 12345; // const ile girilen bilgi değiştirilemez.

console.log(SERVER_PASSWORD);

// 4 İŞLEM (TOPLAMA,ÇIKARMA,ÇARPMA,BÖLME)

let price = 100;
let tax = 0.18;

let priceTax = price * tax ;
let totalPrice = price + priceTax;

console.log (
    "Fiyat: " + price + " KDV Orani: " + tax + " KDV: " + priceTax + " Toplam Fiyat: " + totalPrice
    );

// ARTTIRMA ve AZALTMA     
let counter = 0;
counter += 1;
counter ++;
counter --;

// MOD ALMA

let a = 3;
let b = 2 ;
let c = 3;

let d = a%b;    // kalan 1
let e = a%c;    // kalan 0

console.log( d + " " + e);

console.log ("Kalan ornegi: " + 22%5);

// US ALMA

console.log("2 üzeri 3 : " + 2**3)

// Aşağı, Yukarı ve Yakına Yuvarlama

console.log ("Aşagi Yuvarlama: " + Math.floor(1.3) );

console.log ("Aşagi Yuvarlama: " + Math.ceil(1.3) );

console.log ("Yakina Yuvarlama: " + Math.round(1.3) );

// VERİ TİPİ DEĞİŞTİRME

let stringNumber = "12";    // String yapısında sayı yazıldı.
let newNumber= Number(stringNumber);  // Number yapısına string atandı

console.log(stringNumber);  // String yapısı
console.log(newNumber);     // Number yapısı

// BOOLEAN VERİ TİPİ

// false = 0
// true = 1

Boolean("11")  // True
Boolean("0")  // True
Boolean(1)  // True
Boolean(-1)  // True

Boolean("")  // False
Boolean(0)  // False
Boolean(-0)  // False

let username = "go";

console.log(Boolean(username));     //true gösterir

username = 0;

console.log(Boolean(username));     //false gösterir

console.log(Boolean(3 == 3));

// Karşılaştırma ile Boolean
let w = 5;
let y = 6;
let eger1 = w>y;
let eger2 = w<y;
console.log(Boolean(eger1));        //false gösterir
console.log(Boolean(eger2));        //true gösterir

// length ile karakter sayısı verisi öğrenilir.
username = "Hey"
console.log( Boolean(username.length > 0));     //true gösterir

//  !!!!!!!!!!!!    VERİ TÜRÜ KONTROLÜ  !!!!!!!!!!!! 

let price1 = 111;
let price2 = "111";
let price3 = true;

console.log( typeof(price1) )
console.log( typeof(price2) )
console.log( typeof(price3) )

//  !!!!!!!!!!!!    VERİ TÜRÜ DEĞİŞTİRME --> String to Int  !!!!!!!!!!!! 

let number1 = "111";
console.log("Number1 'nin cinsi: " + number1 + " " + typeof(number1));

number1 = Number(number1);                               // NUMBER'a çevriliyor.
console.log("Number1 'nin cinsi: " + number1 + " " + typeof(number1));

let number2 = "111px";
console.log("Number2 'nin cinsi: " + number2 + " " + typeof(number2));

number2 = parseInt(number2);                            // NUMBER'a çevriliyor.
console.log("Number2 'nin cinsi: " + number2 + " " + typeof(number2));

let number3 = "111.3px";
console.log("Number3 'nin cinsi: " + number3 + " " + typeof(number3));

number3 = parseFloat(number3);                            // Float'a çevriliyor.
console.log("Number3 'nin cinsi: " + number3 + " " + typeof(number3));

//  !!!!!!!!!!!!    VERİ TÜRÜ DEĞİŞTİRME --> INT to String  !!!!!!!!!!!! 

let number4 = 111;
console.log("Number4' ün cinsi: " + number4 + " " + typeof(number4))

number4 = number4.toString();                            // String'e çevriliyor.
console.log("Number4' ün cinsi: " + number4 + " " + typeof(number4))

//  !!!!!!!!!!!!    TEMPLATE LITERALS KULLANIMI (alt + ,)   !!!!!!!!!!!! 

let name = "serkan"
let DOMAIN = "pusulafinans.com"

let email = name + "@" + DOMAIN;

let info = `Merhaba ${name} web sitemize hoş geldin.

Mail adresin: ${email}
Mail adresinin uzunluğu: ${email.length}

Kısa isminiz: ${name[0]+name[1]}.

İyi kullanımlar.`

console.log(info);

// JAVA DOM
console.log(document.head)
console.log(document.URL)

//  !!!!!!!!!!!!  DOM İLE ÖĞE SEÇME VE DEĞİŞTİRME   !!!!!!!!!!!! 

document.getElementById('title')        // getElementById ile documentte ID ile arayarak, buluyoruz.

console.log(title.innerHTML)            // innerHTML ile yazılan bilgi gösterilir.

title.innerHTML = "DENEME"              // innerHTML içerisindeki bilgiyi değiştirme

console.log(title.innerHTML)

let link = document.querySelector("#linkid")

link.innerHTML = "yeni link bilgisi"   // innerHTML içerisindeki bilgiyi değiştirme
link.innerHTML += " degisti"           // innerHTML içerisindeki bilgiye ekleyerek, değiştirme

link.style.color = "red"               // id elementine style atayabiliyoruz.
link.classList.add('btn')              // id elementine class atayabiliyoruz.

//  !!!!!!!!!!!!    PROMPT İLE KULLANICIDAN BİLGİ ALMAK    !!!!!!!!!!!! 
/*
let userName = prompt()

let titlee = document.querySelector("#selam")       // Prompt ile aldığımız bilgiyi id ile seçtiğimiz öğenin içine yazdırıyoruz!!

titlee.innerHTML = `${titlee.innerHTML} <small style="color: white" >${userName}</small> `
*/

// !!!!!!!!!!!! LİSTE İÇERİSİNDEKİ ÖĞEYE ULAŞMAK VE ÖĞE EKLEMEK !!!!!!!!!!!!

let lastChild = document.querySelector("ul#list>li:last-child")      // LİSTEDEKİ SON ELEMANA ULAŞMAK
lastChild.innerHTML = "go"          // LİSTEDEKİ SON ELEMANI DEĞİŞTİRME

let firstChild = document.querySelector("ul#list>li:first-child")      // LİSTEDEKİ İLK ELEMANA ULAŞMAK
firstChild.innerHTML = "Hey"       // LİSTEDEKİ İLK ELEMANI DEĞİŞTİRME

// LİSTEYE YENİ ÖĞE EKLEMEK

let listeyiBul = document.querySelector("ul#list")      // Listeyi bir değişkene atama
let yeniLi1 = document.createElement('li')              // YENİ ÖĞE OLUŞTURMA
let yeniLi2 = document.createElement('li')              // YENİ ÖĞE OLUŞTURMA   

yeniLi1.innerHTML = "YENİ ÖĞE 1"                    // YENİ ÖĞENİN İÇİNE YAZMA
yeniLi2.innerHTML = "YENİ ÖĞE 2"                    // YENİ ÖĞENİN İÇİNE YAZMA        

listeyiBul.prepend(yeniLi1)                         // LİSTEYE YENİ ÖĞEYİ EN BAŞA EKLEME
listeyiBul.append(yeniLi2)                          // LİSTEYE YENİ ÖĞEYİ EN SONA EKLEME


// CSS CLASS EKLEMEK VEYA ÇIKARMAK 

document.querySelector("#list").classList.add

// ********************************** FUNCTION / FONKSİYONLAR ********************************************

// DEFAULT PARAMETRE VERİP FONKSİYONUN HATA VERMEDEN ÇALIŞMASINI SAĞLAYABİLİRİZ.
// ÖRNEK: newName = "" , newAge = "" diye girebiliriz. veya ${newName ? newName : " "} 
function hello (newName,newAge) {
    document.querySelector("#li1").innerHTML = "Hello " + newName + "  Your age is: " + newAge
}
hello("SERKAN" , 36)

function topla (sayi1 , sayi2) {
    return sayi1 + sayi2 ;
}
let sonuc = topla (10,20)
console.log (sonuc)

// id 'yi de function'a dışarıdan girmek!
function hello1 (id , bilgi) {
    document.querySelector(`#${id}`).innerHTML = bilgi
}
hello1("li2" , "serkan")     // id ve bilgiyi fonksiyona girdik!

// Function içerisie başka function girmek!

function hello2(id , bilgi) {
    document.querySelector(`#${id}`).innerHTML = bilgi
}
hello2("li3" ,topla (10,20))     // Bilgi için diğer fonksiyonu girdik!


let arrrr = [1,2,3,4]

let arr12 = arrrr.join("")

console.log(arrrr)
console.log(arr12)

// CÜMLEYİ TERS ÇEVİRMEK

let str = "Hello"

function FirstReverse(str) { 
    let splitStr = str.split("")  // split ile Karakterlerine ayırmak
    console.log(splitStr)
    let reverseArr = splitStr.reverse() // reverse ile ters çevirmek
    console.log(reverseArr)
  
    let normalArr = reverseArr.join("") // join ile birleştirmek
    console.log(normalArr)
  
    return normalArr; 
}

console.log(FirstReverse("Hello"))

// Cümlenin ilk harflerini Büyük Yapmak

let str2 = "i ran thEre"

function LetterCapitalize(str) {
    // split ile kelimelerine ayırıyor.
  let arr = str.split(" ")          // split içerisinde 1 boşluk bırakmazsak, tek tek harflerine ayırır.
  for (let i = 0; i < arr.length ; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(" ")
}
console.log(LetterCapitalize(str2))

//  *************** !!!FETCH API KULLANMAK!!! ***************
// JSON DOSYASINDAN VERİ ÇEKMEK
fetch("data/info.json").then(
    response => {
        return response.json()
    }
).then(responseJson => {
    console.log(responseJson.Age)
})

// AYNI ÖRNEK
/*
fetch("data/info.json").then(
    response => response.json()
).then(responseJson => console.log(responseJson.Age))

let payload = {
        userName : "Nukhet" ,
        surName : "Sisman" ,
        Age : 36

  }
*/

// API DOSYASINDAN VERİ ÇEKMEK
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(responseJson => {
    responseJson.forEach(item => {
        console.log(item.title)
    });
})
