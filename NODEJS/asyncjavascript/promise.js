/*
const promise1 = new Promise((resolve, reject) => {
    resolve("Veriler Alındı!")
    reject("Bağlantı Hatası!")
});

//console.log(promise1);

promise1
    .then(value => {                // RESOLVE İŞLEMİNİ ALMAK!
        console.log(value)
    }).catch(error => {             // REJECT İŞLEMİNİ ALMAK!
        console.log(error)
    })
*/

const books = [
    {name: "Kitap 1" , author: "Yazar 1"},
    {name: "Kitap 2" , author: "Yazar 2"},
    {name: "Kitap 3" , author: "Yazar 3"}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name , book.author)
    })
};

const addBook = (newBook) => {
    
    let promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        //reject("BIR HATA OLUSTU!")
    })
    
    return promise1;
};

addBook({name: "Kitap 10" , author: "Yazar 10"})
    .then(() => {
        console.log("Yeni Liste")
        listBooks();
    }).catch((error) => {
        console.log(error)
    });