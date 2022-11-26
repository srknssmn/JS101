
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

