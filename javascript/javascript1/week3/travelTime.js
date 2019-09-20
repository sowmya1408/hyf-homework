const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeToTravelADistance(travelInformation) {
    const timeToTravel = travelInformation.destinationDistance/travelInformation.speed;
    const totalHours = Math.floor(timeToTravel);
    const totalMinutes = Math.round((timeToTravel - totalHours) * 60);
    return `${totalHours} hours and ${totalMinutes} minutes`
}  

const travelTime = timeToTravelADistance(travelInformation);
console.log(travelTime);
