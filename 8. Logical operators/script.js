const hasDriversLisence = true;
const hasGoodVision = true;
console.log(hasDriversLisence && hasGoodVision);
console.log(hasDriversLisence || hasGoodVision);
console.log(!hasDriversLisence);


const isTired = false;
console.log(hasDriversLisence && hasGoodVision && isTired);
 
if(hasDriversLisence && hasGoodVision && !isTired){
    console.log('Sara is able to drive!');
}
else{
    console.log('Someone else should drive...')
}

