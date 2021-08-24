// Variables Declartion 
let a = document.getElementById('dob');
let b = document.getElementById('desiredDate');
let btn = document.getElementById('btn')
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let weeks = document.getElementById('weeks')
let hours = document.getElementById('hrs')
let mins = document.getElementById('mins')

// Funcution
function calculateAge() {
  let date1 = a.value;
  let date2 = b.value;
  let DOB = new Date(date1);
  let PickDate = new Date(date2);

  if (date1 > date2) {
    alert("Enter A Valid Date");
  } else if (date1 == date2) {
    alert("Both Dates Are Same!");
  } if (DOB != PickDate) {
    let difference = PickDate - DOB;
    let yr = (h2.innerText = Math.round(difference / (1000 * 3600 * 24 * 365.25) * 1000) / 1000 + " Years");
    let month = (h3.innerText = Math.round(difference / (1000 * 3600 * 24 * 30.417) * 100) / 100 + " Months");
    let day = (h4.innerText = (difference / 86400000) + " Days");
    let week = (weeks.innerText = Math.round(difference / (1000 * 3600 * 24 * 7) * 100) / 100 + " Weeks");
    let hrs = (hours.innerText = (difference / (1000 * 3600)) + " Hours");
    let minute = (mins.innerText = (difference / (1000 * 60)) + " Minutes");
    // console.log(difference + " is diff");
    // console.log(yr + " in Years");
    // console.log(month + " in months");
    // console.log(day + " in days");
    // console.log(week + " in Weeks");
    // console.log(hrs + " in hrs");
    // console.log(minute + " in Minutes");
  } else {
    alert("Invalid");
  }
}