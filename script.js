let DOB = document.getElementById("dob");
let Today = document.getElementById("today");
let btn = document.getElementById("btn");
let h2 = document.querySelector('h4');

function age() {

    // Variables Declaration
    let a = DOB.value;
    let b = Today.value;
    let c = new Date(a);
    let d = new Date(b);
    let year1 = c.getFullYear();
    let year2 = d.getFullYear();
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
        console.log(diff);

        if (b > a && (date1 == date2) && (month1 == month2)) {
            let diffYears = year2 - year1;
            // let minusOne = diffYears - 1;
            let result = (h2.innerText = `You Are ${diffYears} Years`);
            console.log("only year is different");
            console.log(result);
        }
        
        if (b > a && (date1 != date2) || (month1 != month2)) {
            let diffYear = year2 - year1;
            let minusOne = diffYear - 1;
            let result1 = (h2.innerText = `You Are ${minusOne} Years`);
            console.log("date is different");
            console.log(result1);
        }
    }

    else if (a == b) {
        alert("Both Dates Are Same")
    }

    else {
        alert("Incorrect");
    }
}
     // if (a > b) {
            //     alert("Enter A Valid Date")
            // }
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

