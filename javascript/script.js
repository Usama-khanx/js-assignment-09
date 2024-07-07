
// TABLE PRINT KARE

// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare
var tableINputNumber = +prompt("Enter any number for draw a table")

for(var i = tableINputNumber; i <= tableINputNumber; i++ ) {

    for(var j = 1; j <= 10; j ++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}



//2. ARRAY ELEMENTS KA SUM PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements ka sum find kar k print kare

 var inp;
var myarray = []

for(var i=0; i < 5; i++){
    
    inp =   +prompt("Enter five numbers to push into array and then find it's sum") 
   myarray.push(inp)
  

}
console.log(myarray)
 var sum = 0;
 for(var j = 0; j <myarray.length; j++ ){
   sum  += myarray[j]
 }
 console.log(sum)






// 3. ARRAY KA SUB SE BARA NUMBER PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare


var arrayForlargeElements = [];
for(var ii = 0; ii < 5; ii++){
    var inputsNumbersForArray = +prompt("Enter 5 integers to create its array and then find the largest")
    arrayForlargeElements.push(inputsNumbersForArray);
}
console.log(arrayForlargeElements)

var maximumValueInArray = arrayForlargeElements[0]
for (var ij = 0; ij <arrayForlargeElements.length; ij++){
    if(maximumValueInArray < arrayForlargeElements[ij]+1){
        maximumValueInArray = arrayForlargeElements[ij];
    }
}
console.log(maximumValueInArray)


// 4. USER SE STRING LE AND USKO ULTA PRINT KARE
// DESCRIPTION:
// 1. user se koi b string input le
// 2. usko reverse me print karde e.g: mehtab -> bathem

var giveInputString = prompt("Enter String to print in reverse")
console.log(giveInputString)
var strrev;
for (strrev = giveInputString.length; strrev >= 0; strrev--){
    console.log(giveInputString[strrev])
}



// 5. FACTORIAL
// DESCRIPTION:
// 1. user se koi b NUMBER input le
// 2. us number ka factorial find kr k print kare
// 3. factorial def:
// the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
// 4 * 3 * 2 * 1 = 24

var enterNumberForFactorial = +prompt("Enter Number to find its factorail")
var Result = 1;
for (var fact_i = 1; fact_i <= enterNumberForFactorial; fact_i++){


    console.log(`${Result} ❎ ${fact_i} is ${Result *= fact_i}`)
                                            /* Result ki value ko factorial k sat multiply ker
                                             raha ho pir os sey jo result araha fact_i hai os ko
                                              Result mai assign kia hai */   
}
console.log("The Final factorial is ! ",Result)
