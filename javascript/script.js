
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
    
    inp =   +prompt("Enter five numbers") 
   myarray.push(inp)
  

}
console.log(myarray)
 var sum = 0;
 for(var j = 0; j <myarray.length; j++ ){
   sum  += myarray[j]
 }
 console.log(sum)
