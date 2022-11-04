function showTime(){
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let day = days[date.getDay()];

    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session + " " + day;
    document.getElementById("MyClockDisplay").innerText = time;
    
    setTimeout(showTime, 1000);
}

showTime();

let info = prompt("Adınız?")
let myName = document.querySelector("#myName")
myName.innerHTML = info