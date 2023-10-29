const myDate = new Date();
const hrs = myDate.getHours();
let msg = "";

if (hrs<12) msg = "&& GOOD MORNING!";      // After 6am
if (hrs >= 12 && hrs<17) msg = "&& GOOD AFTERNOON!";    // After 12pm
if (hrs >= 17 && hrs<=24) msg = "&& GOOD EVENING!";      // After 5pm

document.write(msg);
