
const getEventWeekDay = (eventDays) => {
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    const totalDays = today.getDay() + eventDays;
    const  dayIndex = totalDays % weekDays.length; 
    const eventWeekday = weekDays[dayIndex];
    return eventWeekday;
 }


console.log(getEventWeekDay(9));
console.log(getEventWeekDay(3));
