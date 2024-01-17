
setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hrhand = document.querySelector('.hour');
    let minhand = document.querySelector('.min');
    let sechand = document.querySelector('.sec');
    let hr_deg = 30*hr + min/2;
    let min_deg = 6 * min;
    let sec_deg = 6 * sec;

   hrhand.style.transform = `rotate(${hr_deg}deg)`
   minhand.style.transform = `rotate(${min_deg}deg)`
   sechand.style.transform = `rotate(${sec_deg}deg)`
}, 1000);