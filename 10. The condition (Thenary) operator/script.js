const age = 13;
 // Conditional operator
age >=18 ? console.log('I like to drink water 💧'): console.log('I like to drink milk 🥛');


const  drink = age >=18 ? 'water 💧': 'milk 🥛';
console.log(drink);


// With if else statement
let drink2;
if(age>= 18){
drink2= 'water 💧';
}
else{
drink2 = 'milk 🥛';
}
console.log(drink2);


//With template liteller

console.log(`I like to drink ${age >=18 ? 'water 💧': 'milk 🥛'}`);