const boughtCandyPrices = [];

const addCandy = (candyType, weight) => {
    if (candyType === 'sweet') {
        return boughtCandyPrices.push(0.5 * weight);
    } else if (candyType === 'Chocolate') {
        return boughtCandyPrices.push(0.7 * weight);
    } else if (candyType === 'Toffee') {
        return boughtCandyPrices.push(1.1 * weight);
    } else if (candyType === 'Chewing-gum') {
        return boughtCandyPrices.push(0.03 * weight);
    } else { 
        return "please enter candyType";
    }

}
// addCandy('Chewing-gum', 100);
addCandy('Toffee', 30);
// addCandy('Chocolate', 50);
// addCandy('sweet', 60);
console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;
for (i = 0; i < boughtCandyPrices.length; i++) {
    function canBuyMoreCandy() {
        if (boughtCandyPrices[0] <= amountToSpend) {
            return "You can buy more, so please do!";
        } else {
            return "Enough candy for you";
        }
    }

}
console.log(amountToSpend);
const candy = canBuyMoreCandy();
console.log(candy);