// Initializing Variables 
let a = document.getElementById('dob');         //  To get Input Date of dob
let b = document.getElementById('desiredDate'); //  To get Input Date of desiredDate
let btn = document.getElementById('btn');
let yrs = document.getElementById('yrs');
let months = document.getElementById('months');
let days = document.getElementById('days');
let weeks = document.getElementById('weeks');
let hours = document.getElementById('hrs');
let mins = document.getElementById('mins');
let err = document.getElementById('error'); // This is to show error made by user

// Function
function calculateAge() {
  let date1 = a.value;            // value of dob
  let date2 = b.value;            // value desiredDate
  let DOB = new Date(date1);      // Putting dob value into DOB
  let PickDate = new Date(date2); // Putting desiredDate value into PickDate

  // If-Else Conditions

  // For Invalid Date
  if (date1 > date2) {
    alert("Enter A Valid Date");
    err.style.display = "block";
    err.innerHTML = "Enter A Valid Date";
    yrs.innerHTML = "";
    months.innerHTML = "";
    days.innerHTML = "";
    weeks.innerHTML = "";
    hours.innerHTML = "";
    mins.innerHTML = "";
  }

  // For Same Date
  else if (date1 == date2) {
    alert("Both Dates Are Same!");
    err.style.display = "block";
    err.innerHTML = "Both Dates Are Same!";
    yrs.innerHTML = "";
    months.innerHTML = "";
    days.innerHTML = "";
    weeks.innerHTML = "";
    hours.innerHTML = "";
    mins.innerHTML = "";
  }

  // To get result
  else if (DOB < PickDate) {
    let difference = PickDate - DOB;  //  This is Difference in Miliseconds

    // Converting Miliseconds to Years, Months, Days, Weeks, Hours, Minutes, Seconds
    let yr = (yrs.innerText = Math.round(difference / (1000 * 3600 * 24 * 365.25) * 1000) / 1000 + " Years");
    let month = (months.innerText = Math.round(difference / (1000 * 3600 * 24 * 30.417) * 100) / 100 + " Months");
    let day = (days.innerText = (difference / 86400000) + " Days");
    let week = (weeks.innerText = Math.round(difference / (1000 * 3600 * 24 * 7) * 100) / 100 + " Weeks");
    let hrs = (hours.innerText = (difference / (1000 * 3600)) + " Hours");
    let minute = (mins.innerText = (difference / (1000 * 60)) + " Minutes");
    err.style.display = "none";
  }

  else {
    alert("Invalid");
  }
}