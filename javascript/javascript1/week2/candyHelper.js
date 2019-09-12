const boughtCandyPrices = [];

const addCandy = (candyType, weight) => {
    switch(candyType) {
        case 'sweet':
        return boughtCandyPrices.push(0.5 * weight);
        break;
        case 'Chocolate': 
        return boughtCandyPrices.push(0.7 * weight);
        break;
        case 'Toffee': 
        return boughtCandyPrices.push(1.1 * weight);
        break;
        case 'Chewing-gum':
        return boughtCandyPrices.push(0.03 * weight);
        break;
        default: 
        return "please enter candyType";
    }

}
addCandy('Chewing-gum', 600);
addCandy('Toffee', 30);
addCandy('Chocolate', 50);
addCandy('sweet', 60);
console.log(boughtCandyPrices);


const canBuyMoreCandy = boughtCandyPrices =>  {
    const amountToSpend = Math.random() * 100;
    console.log(amountToSpend);

         let sumPrice = 0;             
        for (let i = 0; i < boughtCandyPrices.length; i++) {
            sumPrice+= boughtCandyPrices[i];
        }
    console.log(sumPrice);
          if (sumPrice <= amountToSpend) {
            return "You can buy more, so please do!";
        } else {
            return "Enough candy for you";
        }
    } 

console.log(canBuyMoreCandy(boughtCandyPrices));