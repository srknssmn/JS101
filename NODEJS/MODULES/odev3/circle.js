function circleArea(r) {
    let pi = Math.PI
    console.log("Dairenin Alanı: " + (pi*r*r))
};

function circleCircumference(r) {
    let pi = Math.PI
    console.log("Dairenin Çevresi: " + (2*pi*r))
};

module.exports = {
    circleArea,
    circleCircumference
};