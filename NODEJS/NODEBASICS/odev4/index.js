const fs = require('node:fs');

fs.appendFile('employee.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Dosya Başarılı Bir Şekilde Oluşturuldu.")
    }
    fs.readFile('employee.json' , 'utf8' , (err , data) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Dosya okunuyor..")
            console.log(data)
        }
        fs.writeFile('employee.json', '{"name": "Employee 1 Name", "salary": 5000}', 'utf8', (error , data) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Dosya Başarılı Bir Şekilde Değiştirildi.")
            }
            fs.readFile('employee.json' , 'utf8' , (err , data) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log("Dosya okunuyor..")
                    console.log(data)
                }
                fs.unlink("employee.json", (err) => {
                console.log("Dosya siliniyor..");
                if (error) {
                    console.log(error)
                } else {
                    console.log("Dosya Silindi!!")
                }
                })
            })
        })
    })
})

// Callback Olmadan Çalışan Düz Yapı!
/*
fs.appendFile('employee.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Dosya Başarılı Bir Şekilde Oluşturuldu.")
    }
});

fs.readFile('employee.json' , 'utf8' , (err , data) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Dosya okunuyor..")
        console.log(data)
    }
});

fs.writeFile('employee.json', '{"name": "Employee 1 Name", "salary": 5000}', 'utf8', (error , data) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Dosya Başarılı Bir Şekilde Değiştirildi.")
    }
});

fs.readFile('employee.json' , 'utf8' , (err , data) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Dosya okunuyor..")
        console.log(data)
    }
});

fs.unlink("employee.json", (err) => {
    console.log("Dosya siliniyor..");
    if (error) {
        console.log(error)
    } else {
        console.log("Dosya Silindi!!")
    }
});
*/