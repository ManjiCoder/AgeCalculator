console.log("work");


let DOB = document.getElementById("dob");
let Today = document.getElementById("today");
let btn = document.getElementById("btn");
let h2 = document.querySelector('h4');

function age() {
    console.log("button is working");

    // Variables Declaration
    let a = DOB.value;
    let b = Today.value;
    let c = new Date(a);
    let d = new Date(b);
    let date1 = c.getFullYear();
    let date2 = d.getFullYear();
    let date11 = c.getMonth();
    let date22 = d.getMonth();

    // Conditions
    if (date2 > date1) {
        // console.log(date2 + " is big");

        const diffYears = date2 - date1;
        const diffMonths = date22 + date11;

        console.log(h2.innerText = diffYears + " is your running year");
        // console.log(a);
        // console.log(b);
        // console.log(c);
        // console.log(d);
        console.log(date1);
        console.log(date2);
        // console.log(date11);
        // console.log(date22);
        console.log(diffYears + ' in year');
        console.log(diffMonths + ' in months');
    }
    else if (date1 > date2 ) {
        alert("Enter a valid DOB")
        // console.log(date1 + " is big");
    }
    else if(date2 == date1){
        alert("both dates are common")
    }
    else {
        console.log("Incorrect");
    }
}

// let a = Math.abs(DOB - Today);
// let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// let a = eval(DOB) - eval(Today);
// let a = (DOB) - (Today);
// console.log(DOB.getDate());
    // console.log(DOB.value);
    // console.log(Today.value);
    // console.log(a + "days");
    // console.log(diffDays + "months");

    // let a = DOB.value;
    // let b = Today.value;
    // let c = new Date(a);
    // let d = new Date(b);
    // let date1 = c.getFullYear();
    // let date2 = d.getFullYear();
    // let date11 = c.getMonth();
    // let date22 = d.getMonth();
    // const diffYears = date2 - date1;
    // const diffMonths = date22 + date11;

    // console.log(h2.innerText = diffYears + " is your running year");
    // let dynamicElement = h2.innerText = 23;
    // console.log(dynamicElement);

    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // console.log(date1);
    // console.log(date2);
    // console.log(date11);
    // console.log(date22);
    // console.log(diffYears + ' in year');
    // console.log(diffMonths + ' in months');
    // document.write(diffYears + ' is your running year');

