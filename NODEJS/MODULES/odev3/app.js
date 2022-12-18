// NORMAL YÖNTEM
// const circle = require('./circle.js');
// circle.circleArea(5);
// circle.circleCircumference(5);

// OBJECT DESTRUCTURING YÖNTEMİ
const {circleArea, circleCircumference} = require('./circle.js')
let r = 5;
circleArea(r);
circleCircumference(r);