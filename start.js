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