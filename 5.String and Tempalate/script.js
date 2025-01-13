const firstName = 'Hamid';
const job = 'Electrion';
const birthYear = 2006;
const year = 2024;

const hamid = "I'm " +  firstName   + ' , a ' + ( year - birthYear)  + ' year old ' +  job + '!';
console.log(hamid);

//Template
const newHamid = `I'm ${firstName},
 a ${year - birthYear} year old ${job} !`;
console.log(newHamid);

console.log(`Just a regular string`);

console.log('String with \n\
    multple  \n\
    lines');
 

    //Now with template literls
    console.log(`string with 
        multiple 
        lines`)