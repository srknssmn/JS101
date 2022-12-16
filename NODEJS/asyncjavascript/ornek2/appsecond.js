const C1 = require('./circlesecond.js');

let r = 5;

// THEN - CATCH 
C1.circleArea(r)
.then ((result) => {
   console.log(`${r} Yarıçapına Sahip Dairenin Alanı: ${result}`) 
}).catch ((error) => {
    console.log(error)
});

C1.circleCircumference(r)
.then ((result) => {
   console.log(`${r} Yarıçapına Sahip Dairenin Çevresi: ${result}`) 
}).catch ((error) => {
    console.log(error)
});

/*
// ASYNC - AWAIT
async function circleAreaResult() {
    try {
        let result = await C1.circleArea(r)
        console.log(`${r} Yarıçapına Sahip Dairenin Alanı: ${result}`)
    } catch (error) {
        console.log(error)
    }
}

async function circleCircumferenceResult() {
    try {
        let result = await C1.circleCircumference(r)
        console.log(`${r} Yarıçapına Sahip Dairenin Alanı: ${result}`)
    } catch (error) {
        console.log(error)
    }
}

circleAreaResult();
circleCircumferenceResult();
*/