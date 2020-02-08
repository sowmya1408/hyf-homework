
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return 2 * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    } 

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}


const circle = new Circle(10);
console.log(circle.getDiameter());// 20
console.log(circle.getCircumference().toFixed(3)); // 62.831
console.log(circle.getArea().toFixed(3));// 314.159
