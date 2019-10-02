const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];


function calculateTheAverage () {
    let total = 0;
    housePrices.forEach(function (housePrice){ 
        total += housePrice;
    });
    const average = Math.floor(total / housePrices.length);
    return `The average of the housePrices is ${average}`;
}



function calculateTheMedian() {
    // sort in ascending order
    const sortHousePrices = housePrices.sort(function(a, b) {return a-b});
    if(sortHousePrices.length % 2 !== 0){
    const theMedianFormula = (sortHousePrices.length + 1)/ 2;
    const median = sortHousePrices[theMedianFormula - 1];
    return `The median of the housePrices is ${median}`;
} else {
    const theEvenMedianFormula = (sortHousePrices.length)/ 2;
    const evenMedian = (sortHousePrices[theEvenMedianFormula - 1] + sortHousePrices[theEvenMedianFormula])/ 2;
    return `The median of the housePrices is ${evenMedian}`;

}
}

   function calculateAvgAndMedian(average, median){
      return {
          average: calculateTheAverage () ,
          median: calculateTheMedian()
      };  
}   

const avgAndMedian = calculateAvgAndMedian();

const unOrderedList = document.createElement('ul');
const body = document.querySelector('body');
body.appendChild(unOrderedList);

housePrices.forEach(function (housePrice) {
    const listItems = document.createElement('li');
    listItems.textContent = housePrice;
    unOrderedList.appendChild(listItems);
});

const paraAvg = document.createElement('p');
paraAvg.textContent = `Average: ${avgAndMedian.average}`;
body.appendChild(paraAvg);

const paraMedian = document.createElement('p');
paraMedian.textContent = `Median: ${avgAndMedian.median}`;
body.appendChild(paraMedian);
