function circleArea (r) {
    return new Promise((resolve, reject) => {
        if(r>0) {
            let pi = Math.PI
            resolve((pi*r*r))
        } else {
            reject("Girilen Değer Sıfırdan Büyük Olmalıdır!")
        }
    })
}

function circleCircumference (r) {
    return new Promise((resolve, reject) => {
        if(r>0) {
            let pi = Math.PI
            resolve((2*pi*r))
        } else {
            reject("Girilen Değer Sıfırdan Büyük Olmalıdır!")
        }
    })
}

module.exports = {
    circleArea,
    circleCircumference
};