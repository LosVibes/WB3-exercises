//1st
function displayMailingLable(name, address, city, state, zip){
    console.log(name);
    console.log(address);
    console.log(city +",", state, zip); // + concatenate - chained together 
    //console.log(`${city}, ${state} ${zip}`); //back-tic template strings and expressions 
}
displayMailingLable("Carlos", "123 Fake st", "Arlington", "TX", "76123");
displayMailingLable("Juan", "123 Fake st", "Arlington", "TX", "76123");

//2nd
function addNumbers(num1, num2){
    return num1 + num2;
}

r1 = addNumbers(6,7)
r2 = addNumbers(11,22)
console.log(r1, r2)


//3rd

function displayReceipt(totalDue, amountPaid){
    const changeAmount = amountPaid - totalDue;
    console.log(`
    total Due: $${totalDue}
    Amount Paid: $${amountPaid}
    Change Due: $${changeAmount}
    `);//end console.log
}
displayReceipt(5.00, 20.00);//exepct 15 in change
displayReceipt(60.00, 100.00); //expect 40 in change
displayReceipt(25, 50.00); // expect 25 in change
//GIGO LAW - Garbage in -> Garbage Out