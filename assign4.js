const myVal = process.argv

const tipAmount = (myVal[3] / 100) * myVal[2]
const totalOwing = tipAmount + myVal[2]
const outPut = `your meal was $${myVal[2]} + a ${myVal[3]}% tip = ${totalOwing}`

console.log(outPut)
