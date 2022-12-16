const r = process.argv.slice(2)[0]*1

function circle (r) {
    let alan = Math.PI*r*r
    console.log("Yarıçapı(Yarıçap) " + r + " olan dairenin alanı: " + alan + " (Alan)")
}

circle(r);