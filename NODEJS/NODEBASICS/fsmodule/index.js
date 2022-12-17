const fs = require('node:fs');
/*
// ******* DOSYA OKUMAK *******
// fs.readFile('/etc/passwd', 'utf8', callback);
fs.readFile('password.txt' , 'utf8' , (err , data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
        console.log("Dosya Okundu!")
    }
})
*/
// ******* DOSYA YAZMAK *******
// fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
/*
fs.writeFile('example.txt', 'GO GO GO', 'utf8', (error , data) => { // Her hangi bir 'data' return kullanmadık.
    if (error) {
        console.log(error)
    } else {
        console.log("Dosya Başarılı Bir Şekilde Oluşturuldu.")
    }
})

fs.writeFile('example.json', '{"name": "Ruya" , "age": "8"}', 'utf8', (error , data) => { // Her hangi bir 'data' return kullanmadık.
    if (error) {
        console.log(error)
    } else {
        console.log("Dosya Başarılı Bir Şekilde Oluşturuldu.")
    }
})
*/
// ******* DOSYAYA VERİ EKLEMEK *******
// fs.appendFile(path, data[, options], callback)
/*
fs.appendFile('example.txt', '\nKEKONATTTT', 'utf8', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Dosya Başarılı Bir Şekilde Veri Eklendi.")
    }
})
*/
// ******* DOSYA SİLMEK *******
// fs.unlink('path/file.txt', callback)
/*
fs.unlink('example1.json' , (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("DOSYA SİLİNDİ!")
    }
})
*/

// ******* KLASÖR OLUŞTURMAK *******
// fs.mkdir('/tmp/a/apple', { recursive: true }, callback)
/*
// TEK KLASÖR OLUŞTURMAK
fs.mkdir('ornek2' , (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("KLASÖR OLUŞTURULDU!")
    }
})
*/
// BİRDEN FAZLA KLASÖR OLUŞTURMAK
/*
fs.mkdir('uploads/img' , { recursive: true } , (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("KLASÖRLER OLUŞTURULDU!")
    }
})
*/
// ******* KLASÖRLERİ SİLMEK *******

fs.rm('ornek2' , { recursive: true } , (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("KLASÖRLER SİLİNDİ!")
    }
})
