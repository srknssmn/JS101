
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

// *********   DİZİDEKİ EN BÜYÜK SAYIYI BULMAK *********

let nums = [2,3,6,6,5,8,4,7]
let bigNum = nums[0]

for (i=0 ; i < nums.length ; i++) {

    if (nums[i] > bigNum) {
        bigNum = nums[i]
    }
}

console.log(bigNum)

// *********   DİZİDEKİ EN BÜYÜK SAYIYI BULMAK *********

let nums1 = [2,3,6,6,9,5,8,4,7,11,10]
let bigNum1 = nums1[0]
let secondNum = nums1[0]

for ( let i=0 ; i < nums1.length ; i++) {

    if (nums1[i] > bigNum1) {
        secondNum= bigNum1
        bigNum1 = nums1[i]
    } else if (nums1[i]>secondNum && nums1[i]< bigNum1){
        secondNum=nums1[i];
    } 
}

console.log(secondNum)

// *********   STRING İÇERİSİNDEKİ HARFLERİ ARAMAK VE SIRALAMAK *********

function vowelsAndConsonants(s) {

    var vowels = "aeiou";

    for(var i=0; i< s.length; i++){
        if(vowels.search(s[i]) != -1){
            console.log(s[i]);
        } 
    }
    for(var i=0; i< s.length; i++){
        if(vowels.search(s[i]) == -1){
            console.log(s[i]);
        } 
    }    
}
// 2. Yöntem
/*
function vowelsAndConsonants(s) {
    let vowels = ['a','e','i','o','u'];
    let s2 = [...s];
    s2.filter((c)=> vowels.includes(c)).forEach((c)=>{console.log(c)});
    s2.filter((c)=> !vowels.includes(c)).forEach((c)=>{console.log(c)});
}
*/

let arabalar = ["dogan" , "sahin" , "kartal"]
console.log("Arabalar Length: " , arabalar.length)
let coun = 0

while (coun<arabalar.length) {
    coun ++
    if (arabalar[coun] == "kartal") {
        console.log(arabalar[coun])
    }
}