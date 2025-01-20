const massAsim  = 78;
const heightAsim = 1.69;
const massAwais = 92;
const heightAwais = 1.95;
//1.
const BMIAsim = massAsim / heightAsim ** 2;//Equal to line 7
const BMIAsim2 = massAsim / (heightAsim * heightAsim);//Equal to line 6

const BMIAwais = massAwais / heightAwais ** 2;//Equal to line 10
const BMIAwais2 = massAwais / (heightAwais * heightAwais);//Equal to line 9
 
// console.log(BMIAsim , BMIAwais2);  


//2.
console.log(BMIAsim, BMIAwais)
const comparisan = BMIAsim > BMIAwais
if(BMIAsim > BMIAwais){
    console.log("BMIAsim is heigher than BMIAwais!")
}else{
    console.log("BMIAwais is heigher than BMIAsim!")

}
if(BMIAsim > BMIAwais){
    console.log(`Asim's  BMI is (${BMIAsim} )heigher than Awais's(${BMIAwais})!`)
}else{
    console.log(`Awais's BMI is (${BMIAwais} )heigher than Asim's(${BMIAsim})!`)

}