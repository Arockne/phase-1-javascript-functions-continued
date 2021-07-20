//implement function called saturdayFun
  //passed in an activity
    //defaults to 'roller-skate'
  //returns a string 'This Saturday, I want to activity!'
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
} 

//implement function expression mondayWork
  //activity is passed in
    //default to 'go to the office'
  //return a string -->'This Monday, I will activity.'
const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`;
}

//implement wrapAdjective
  //return a function
    //take a single parameter string
      //defaults to 'special'
    //returns a string 'You are (...)'
  //take a parameter string used to create visual flair
    //defualt to '*'
const wrapAdjective = (flair='*') => {
  return (adjective) => `You are ${flair}${adjective}${flair}!`;
}