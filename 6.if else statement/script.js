const age = 17;
 
if(age >=18){
    console.log('Asim you  can start driving lisence 🚗');
}else{
    const yearLeft = 18 - age;
    console.log(`Asim you are to young. Wait another ${yearLeft} year :)`)
}

const birthYear = 2001;
 let century;
if(birthYear <= 2000){
     century = 20;
}else{
    century = 21;
}
console.log(century);