
const getEventWeekDay = (eventDays) => {
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    const totalDays = today.getDay() + eventDays;
    if (totalDays <= 6){
    return weekDays[totalDays];
    } else {
    const  totalDaysGreaterThanWeekDays = totalDays % weekDays.length; 
    const eventWeekday = weekDays[totalDaysGreaterThanWeekDays];
    return eventWeekday;
 }
}

console.log(getEventWeekDay(9));
console.log(getEventWeekDay(3));
