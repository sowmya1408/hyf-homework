const clothesToWear =  (temperature) => {
    if (temperature <= 10) {
        return "thermal cloths & jackets";
    } else if (temperature < 18){
        return "full t-shrits,hoddies & jeans";
    } else {
        return "shorts and a t-shirt";
    }
}

console.log(clothesToWear(10));