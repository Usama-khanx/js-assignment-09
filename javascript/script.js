
// TABLE PRINT KARE

var tableINputNumber = +prompt("Enter any number for draw a table")

for(var i = tableINputNumber; i <= tableINputNumber; i++ ) {

    for(var j = 1; j <= 10; j ++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}