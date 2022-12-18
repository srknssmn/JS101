function showPrimeNumbers(lownumber, highnumber) {
    for (let i = lownumber ; i <= highnumber ; i++){
        let isPrime = true;
        for (let j = 2 ; j <= i ; j++) {
            if (i%j === 0 && j !== i) {
                isPrime = false;
            }
        }
        if(isPrime) {
            console.log(i)
    }
    }
}

module.exports = {
    showPrimeNumbers
}