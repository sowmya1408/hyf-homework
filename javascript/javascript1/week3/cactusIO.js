
// Adding an activity

const activities = [];
function addActivity (activity,duration) {
    const todayDate = new Date();  
    const date = todayDate.toLocaleDateString(); // function to figure out date     
   if (!(typeof(date) === "string" && typeof(activity) === "string" && typeof(duration) === "number")) {
       return "Enter date & activity in text and duration as number";
   } else {
       activities.push({date,activity,duration});
   }
}

addActivity('Youtube', 30);
addActivity('Facebook', 20);
addActivity('Instagram', 30);
addActivity('LinkedIn', 15);

console.log(activities);

// Show my status & Usage limit


function showStatus () {
    const usageLimit =  60;
    let sumOfDuration = 0;
  for (let i = 0; i < activities.length; i++) {
       sumOfDuration += activities[i].duration;
  }   
  if(sumOfDuration > usageLimit) {
       return `You have reached your limit, no more smartphoning for you!`
  } else {
      
    return `You have added ${activities.length} activities.They amount to ${sumOfDuration}min. of usage`; 
  }
  }

console.log(showStatus());

// Extra Feature

// list of the activity 
function listOfActivity() {
    const activityList = []
    for (let i = 0; i < activities.length; i++) {
         activityList.push(activities[i].activity);
 
 } return activityList;
}

console.log(listOfActivity());