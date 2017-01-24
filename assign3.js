const myVal = process.argv
let myArr1 = []
myArr1.push(myVal[2])
myArr1.push(myVal[3])
let mySum = Number( myVal[2]) + Number(myVal[3])
if(mySum > 10 && mySum < 100){
    console.log("Sum is greater than 10 but less than 100")
}
else if(mySum > 100 && mySum < 1000){
    console.log("Sum is greater than 100 but less than 1000")
    }
