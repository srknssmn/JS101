let FUNCi = function(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number)
        }, 2000)
    })
}

FUNCi(5).then((value) => {
    console.log(value)
    return value*value
}).then((value) => {
    console.log(value)
    return value*value
}).then((value) => {
    console.log(value)
})