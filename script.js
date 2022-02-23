// Initializing Variables 
const a = document.getElementById('dob');         //  To get Input Date of dob
const b = document.getElementById('desiredDate'); //  To get Input Date of desiredDate
let btn = document.getElementById('btn');
let yrs = document.getElementById('yrs');
let months = document.getElementById('months');
let days = document.getElementById('days');
let weeks = document.getElementById('weeks');
let hours = document.getElementById('hrs');
let mins = document.getElementById('mins');
let err = document.getElementById('error'); // This is to show error made by user

// Function => To Setting InnerHTML To Empty String When Error Occurs
function setInnerHTMLToEmptyWhenErrorOccurs() {
  err.style.display = "block";
  yrs.innerHTML = "";
  months.innerHTML = "";
  days.innerHTML = "";
  weeks.innerHTML = "";
  hours.innerHTML = "";
  mins.innerHTML = "";
}

// Function => calculateAge
function calculateAge() {
  const date1 = a.value;            // value of dob
  const date2 = b.value;            // value desiredDate
  const DOB = new Date(date1);      // Putting dob value into DOB
  const PickDate = new Date(date2); // Putting desiredDate value into PickDate

  // console.log("submitted");

  // If-Else Conditions

  // For No Date Or Empty String
  if ((date1 && date2) !== "") {

    // For Same Date
    if (date1 === date2) {
      alert("Both Dates Are Same!");
      setInnerHTMLToEmptyWhenErrorOccurs();
      err.innerHTML = "Both Dates Are Same!";
      console.error("Both Dates Are Same!");
    }
    // For Invalid Date
    else if (date1 > date2) {
      alert("Enter A Valid Date");
      setInnerHTMLToEmptyWhenErrorOccurs();
      err.innerHTML = "Enter A Valid Date";
      console.error("Enter A Valid Date");
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
  }

  else {
    console.log("Invalid");
  }
}