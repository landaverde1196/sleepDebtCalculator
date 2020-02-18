const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 6
      break;
    case 'Wednesday':
      return 5
      break;
    case 'Thursday':
      return 7
      break;
    case 'Friday':
      return 8
      break;
    case 'Saturday':
      return 4
      break;
    case 'Sunday':
      return 19
      break;
    default:
      return 'Error!'
  };
}

const getActualSleepHours = () => 
 getSleepHours('Monday') + const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 6
      break;
    case 'Wednesday':
      return 5
      break;
    case 'Thursday':
      return 7
      break;
    case 'Friday':
      return 8
      break;
    case 'Saturday':
      return 4
      break;
    case 'Sunday':
      return 19
      break;
    default:
      return 'Error!'
  };
}

const getActualSleepHours = () => 
 getSleepHours('Monday') + 
 getSleepHours('Tuesday') + 
 getSleepHours('Wednesday') + 
  getSleepHours('Thursday') + 
  getSleepHours('Friday') + 
  getSleepHours('Saturday') + 
  getSleepHours('Sunday')

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
    
  } else if(actualSleepHours > idealSleepHours) {
    console.log("You got " + (actualSleepHours - idealSleepHours) + " hour more sleep than needed");
    
  } else if(actualSleepHours < idealSleepHours) {
    console.log("You got " + (idealSleepHours - actualSleepHours) + " hours less sleep. You should get some rest");
    
  } else {
    console.log("Error!");
  }  
  
  }

calculateSleepDebt()

 
 getSleepHours('Tuesday') + 
 getSleepHours('Wednesday') + 
  getSleepHours('Thursday') + 
  getSleepHours('Friday') + 
  getSleepHours('Saturday') + 
  getSleepHours('Sunday')

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
    
  } else if(actualSleepHours > idealSleepHours) {
    console.log("You got " + (actualSleepHours - idealSleepHours) + " hour more sleep than needed");
    
  } else if(actualSleepHours < idealSleepHours) {
    console.log("You got " + (idealSleepHours - actualSleepHours) + " hours less sleep. You should get some rest");
    
  } else {
    console.log("Error!");
  }  
  
  }

calculateSleepDebt()


