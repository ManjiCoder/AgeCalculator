// Function => Creating Date
function todayDate() {
  let date = new Date();
  let date_ = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (date_ < 10) {
    date_ = `0${date_}`;
    let todayDate = `${year}-${month}-${date_}`;
    // console.log(todayDate);

    if (month < 10) {
      month = `0${month}`;
      let todayDate = `${year}-${month}-${date_}`;
      // console.log(todayDate);
      return todayDate;
    }
    return todayDate;
  }
  else {
    let todayDate = `${year}-${month}-${date_}`;
    // console.log(todayDate);
    return todayDate;
  }
}
// console.log("typeof todayDate: " + typeof todayDate)
let tDate = todayDate();
// console.log("typeof tDate: " + typeof tDate)
// console.log(tDate);

let check = document.getElementById('check');
let checkboxText = document.getElementById('checkboxText');
checkboxText.innerText = "Click On CheckBox To Disable Future Date"
let a = document.getElementById('dob');         //  To get Input Date of dob
let b = document.getElementById('desiredDate'); //  To get Input Date of desiredDate
function checkbox() {
  if (check.checked === true) {
    checkboxText.innerText = "Click On CheckBox Disable Future Date";
    // console.log(accept);  

    let amax = document.getElementById('dob').max = '';         //  To get Input Date of dob
    let bmax = document.getElementById('desiredDate').max = ''; //  To get Input Date of desiredDate
    b = document.getElementById('desiredDate').value
    // console.log(`amax & bmax is empty: ${amax} & ${bmax}`);
    return b;
  }
  else if (check.checked === false) {
    checkboxText.innerText = "Click On CheckBox To Enable Future Date";
    // console.log(accept);  

    let amax = document.getElementById('dob').max = tDate;         //  To get Input Date of dob
    let bmax = document.getElementById('desiredDate').max = tDate; //  To get Input Date of desiredDate
    b = document.getElementById('desiredDate').value=tDate
    // console.log(b);
    // console.log(`amax & bmax is: ${amax} & ${bmax}`);
    return b;
  }
  else {
    console.log("Error");
  }
}

// Initializing Variables 

// console.log(checkbox());
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
  err.style.display = "block"
  yrs.innerHTML = "";
  months.innerHTML = "";
  days.innerHTML = "";
  weeks.innerHTML = "";
  hours.innerHTML = "";
  mins.innerHTML = "";
}
// Function => To Add Hover Effect
function addHoverEffect() {
  // console.log("mouseover");
  btn.style.background = "#d1cdcd"
  btn.style.transition = "all 0.2s ease-in"
}
// Function => To Remove Hover Effect
function removeHoverEffect() {
  // console.log("mouseout");
  btn.style.background = "white"
  btn.style.transition = "all 0.2s ease-in"
}
// Function => To Get Lenght & Set Btn Disabled 
function handleOnChange() {
  // If a & b Value Length Is Greater Than 0
  if (a.value.length === 0) {
    btn.disabled = true;
    btn.style.background = "#e4e2e2"
  }
  else {
    btn.disabled = false;
    btn.style.background = "white"
  }
}
// Function => calculateAge
function calculateAge() {
  const date1 = a.value;            // value of dob
  const date2 = checkbox();            // value desiredDate
  console.log(date1);
  console.log(date2);
  const DOB = new Date(date1);      // Putting dob value into DOB
  const PickDate = new Date(date2); // Putting desiredDate value into PickDate
  handleOnChange()
  // If-Else Conditions
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
  // To Get Result
  else if (DOB < PickDate) {
    let difference = PickDate - DOB;  //  This Is Difference In Miliseconds
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
    console.log("Some Error Occurs");
  }
}