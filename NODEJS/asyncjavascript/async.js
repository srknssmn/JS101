function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Veriler alınmaya çalışılıyor..")

        if(data) {
            resolve("Veriler Alındı!")
        }else {
            reject("Veriler Alınamadı!")
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor..")

        if(receivedData) {
            resolve("Veriler Düzenlendi!")
        }else {
            reject("Veriler Düzenlenemedi!")
        }
    })
}
/*
getData(true)
.then(result => {
    console.log(result)
    return cleanData(false)
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})*/

/*
async function processData() {

    try {
        const receivedData = await getData(true)
        console.log(receivedData)
        const cleanedData = await cleanData(true)
        console.log(cleanedData)
    } catch (error) {
        console.log(error)
    }
}
processData();
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
/*
addBook({name: "Kitap 10" , author: "Yazar 10"})
    .then(() => {
        console.log("Yeni Liste")
        listBooks();
    }).catch((error) => {
        console.log(error)
    });
*/

async function showBooks() {
    try {
        await addBook({name: "Kitap 12" , author: "Yazar 12"})
        listBooks();
    } catch (error) {
        console.log(error)
    }
}

showBooks();