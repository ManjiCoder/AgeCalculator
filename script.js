<<<<<<< HEAD
// Variables Declartion 
let a = document.getElementById('dob');
let b = document.getElementById('desiredDate');
let btn = document.getElementById('btn')
=======
let DOB = document.getElementById("dob");
let Today = document.getElementById("today");
let btn = document.getElementById("btn");
>>>>>>> 7ab4cea5efcde7c3e394d5f44f4849e37779657e
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');
<<<<<<< HEAD
let weeks = document.getElementById('weeks')
let hours = document.getElementById('hrs')
let mins = document.getElementById('mins')
=======
let h6 = document.querySelector('h6');
>>>>>>> 7ab4cea5efcde7c3e394d5f44f4849e37779657e

// Funcution
function calculateAge() {
    let date1 = a.value;
    let date2 = b.value;
    let DOB = new Date(date1);
    let PickDate = new Date(date2);

<<<<<<< HEAD
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
=======
  // Variables Declaration
  let a = DOB.value;
  let b = Today.value;
  let c = new Date(a);
  let d = new Date(b);
  /* let year1 = c.getFullYear();
  let year2 = d.getFullYear();*/
  let month1 = c.getMonth();
  let month2 = d.getMonth();
  let date1 = c.getDate();
  let date2 = d.getDate();

  // let fullArr = [c.getDate(), d.getDate(), c.getMonth(), d.getMonth(), c.getFullYear(), d.getFullYear()]
  // console.log(fullArr);
  // DO NOT DELETE//
  //  let dateArr = [c.getFullYear(), d.getFullYear(), c.getMonth(), d.getMonth(), c.getDay(), d.getDay()]; // getDay give return value in Integer from 0-6 0:Sunday, 1:Monday & so on;
  // console.log(dateArr);
  // Conditions
  if (a != b) {
    let diff = d - c;
    console.log(h5.innerText = (diff/(1000*60)) + " in seconds");
    console.log(h6.innerText = diff/(1000*1440)+ " in minutes");
    console.log(h5.innerText = diff/(1000*3600)+ " in hours");
    console.log(h5.innerText = diff/(86400000)+ " in days");
    console.log(h4.innerText = Math.round(diff/(1000*3600*24*7)*100) / 100 + " in weeks");
    console.log(h3.innerText = Math.round(diff/(1000*3600*24*30.417)*100) / 100 + " in months");
    console.log(h2.innerText = (diff/(1000*3600*24*365.25)) + " in Years");
    let rounded = (h2.innerText = Math.round(diff/(1000*3600*24*365.25)*1000) / 1000 + " in Years");
    console.log(rounded)
    // console.log.e(h2.innerText = .toFixed(diff/(1000*3600*24*365.25)) + " in Years");

    if (a > b) {
      alert("Enter A Valid Date")
    }
    /* if (b > a && (date1 == date2) && (month1 == month2)) {
    let diffYears = year2 - year1;
    let result = (h2.innerText = `You Are ${diffYears} Years`);
    console.log("only year is different");
    console.log(result);
  }

  if (b > a && (date1 != date2) || (month1 != month2)) {
    let diffYear = year2 - year1;
    let minusOne = diffYear - 1;
    let result1 = (h2.innerText = `Your Age is ${minusOne} Years`);
    console.log("date is different");
    console.log(result1);
    if (b > a && (date2 > date1)) {
      let diffYearsss = year2 - year1;
      let result2 = (h2.innerText = `Your Age is  ${diffYearsss} Years date`);
      console.log(" is different");
      console.log(result2);
    }
    if (b > a && (month2 > month1)) {
      let diffYearss = year2 - year1;
      let result3 = (h2.innerText = `Your Age is  ${diffYearss} Years`);
      console.log(" is different");
      console.log(result3);
>>>>>>> 7ab4cea5efcde7c3e394d5f44f4849e37779657e
    }

  }*/
  } else if (a == b) {
    alert("Both Dates Are Same")
  } else {
    alert("Incorrect");
  }
}
<<<<<<< HEAD
=======

// console.log(result);
// let result = (h2.innerText = diffYear);
// console.log(h2.innerText = diffYears + " is your running year");
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(year1);
// console.log(year2);
// console.log(month1);
// console.log(month2);
>>>>>>> 7ab4cea5efcde7c3e394d5f44f4849e37779657e
