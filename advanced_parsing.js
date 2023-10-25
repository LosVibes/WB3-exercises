/*
Name: Cher
Only name: Cher
Name: Brenda Kaye
First name: Brenda
Last name: Kaye
Name: Dana Lynn Wyatt
First name: Dana
Middle name: Lynn
Last name: Wyatt
*/

function showNameParts(name) {
    const SPACE = " ";
    console.log("");//blank line to separate result

    const firstLocation = name.indexOf(SPACE);
    if(-1 == firstLocation){
        //NOT FOUND 
        console.log("ONLY NAME: " + name);
        return; //Exits function now!
    }

    const secondLocation = name.indexOf(SPACE, firstLocation + 1);
    if(-1 == secondLocation){
        //ONLY TWO WORDS
        console.log("FIRST NAME: " + name.slice(0, firstLocation));
        console.log("LAST NAME:  " + name.slice(firstLocation + 1));//START -> TO THE END
        return;
    }
        //THREE
        console.log(`FIRST NAME:  ${ name.slice(0, firstLocation) }`);
        //console.log("FIRST NAME:  " + name.slice(0, firstLocation));
        console.log("MIDDLE NAME: " + name.slice(firstLocation + 1, secondLocation +1 ));
        console.log("LAST NAME:   " + name.slice(secondLocation + 1));//START -> TO THE END
}

showNameParts("Madonna")
showNameParts("Nina Marie")
showNameParts("Kevin Ernest Long")