/**
ACME:123-L the large (L) part 123 is supplied by ACME
DI:12345-M the medium (M) part 12345 is supplied by DI
ACE:1-12 the size 12 part 1 is supplied by ACE 
 
 */

function getSupplier(code){
    return code.slice(0, code.indexOf(":"));
}
//That returns all characters before the :
function getProductNumber(code){
    return code.slice(0, code.indexOf(":") + 1,  code.indexOf("-"));
}
//That returns all characters between the : and - 
function getSize(code){
    return code.slice(code.indexOf("-") + 1);// NO SECOND ARGUMENT FOR WHERE TO STOP
}
//That returns all characters after the -
function pretty(supplier, product, size){
    console.log(`the size ${size} part ${product} is supplied by ${supplier}`);
    if(size == "L"){
        size = "large (L)"
    }else if (size == "M"){
        size = "medium (M)"
    }
    
}
const part1 = "ACME:123-L"
//console.log(getSupplier(part1), getProductNumber(part1), getSize(part1) );
prettyPrint(getSupplier(part1), getProductNumber(part1), getSize(part1) );
const part2 = "DI:12345-M"
//console.log(getSupplier(part2), getProductNumber(part2), getSize(part2) );
prettyPrint(getSupplier(part2), getProductNumber(part2), getSize(part2) );

const part3 = "ACE:1-12"
//console.log(getSupplier(part3), getProductNumber(part3), getSize(part3) );
prettyPrint(getSupplier(part3), getProductNumber(part3), getSize(part3) );
