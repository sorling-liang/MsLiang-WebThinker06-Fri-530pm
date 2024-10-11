let my_home_address = "Hougang St 21 Blk 203 #01-30 S500203";
const MY_NRIC = "S12345678B";

console.log(my_home_address);
console.log(MY_NRIC);

// old way
function calculateMyIncome() {
    console.log("$50,000");
}

// new way
let calculateMyTax = () => {
    console.log("$1200");
}

// call the functions
calculateMyIncome();
calculateMyTax();