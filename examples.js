function stripHyphensFromSSN(ssn) {
    let firstPart = ssn.substring(0, 3);
    let secondPart = ssn.substring(4, 6);
    let thirdPart = ssn.substring(7);
    let ssnDigitString = firstPart + secondPart + thirdPart;
    return ssnDigitString;
    }
    // elsewhere
    let ssn = "123-45-6789";
    let ssnWithoutHyphens = stripHyphensFromSSN(ssn);
    console.log(ssnWithoutHyphens);