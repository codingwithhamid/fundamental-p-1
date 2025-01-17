const day = "sunday";

switch (day) {
  case "monday":
    console.log("Go to collage");
    console.log("Prepare some course");
    break;
  case "tuesday":
    console.log("Prepare course");
    break;
  case "wednesday":
  case "thursday":
    console.log("Play game with friends");
    break;
  case "friday":
    console.log("Doing something better than before");
    break;
  case "satursday":
  case "sunday":
    console.log("Enjoy weekends :D)");
    break;
  default:
    console.log("Not a valid day!");
}

if(day === 'monday'){
    console.log("Go to collage");
    console.log("Prepare some course");
}else if(day === 'tuesday'){
    console.log("Prepare course");
}
else if(day === 'wednesday' || day === 'thursday'){
    console.log("Play game with friends");
}
else if (day === 'friday'){
    console.log("Doing something better than before");
}
else if(day === 'satursday' || day === 'sunday'){
    console.log("Enjoy weekends :D)");
}
else{
    console.log("Not a valid day!"); 
}