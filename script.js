let DOB = document.getElementById("dob");
let Today = document.getElementById("today");
let btn = document.getElementById("btn");
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');
let h6 = document.querySelector('h6');

function age() {

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
    }

  }*/
  } else if (a == b) {
    alert("Both Dates Are Same")
  } else {
    alert("Incorrect");
  }
}

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
