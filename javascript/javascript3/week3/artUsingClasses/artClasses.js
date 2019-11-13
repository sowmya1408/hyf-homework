// Paint a circle to a canvas element using CanvasRenderingContext2d.arc() & fill()
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');        
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = 'lightPink';
ctx.fill();
// Creating circle class

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.xCordinate = x;
        this.yCordinate = y;
        this.radius = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.xCordinate, this.yCordinate, this.radius, this.startAngle, this.endAngle)
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}

const circle1 = new Circle(50, 30, 20, 0, 2 * Math.PI, '#000');
const circle2 = new Circle(150, 30, 20, 0, 2 * Math.PI, '#000');
const circle3 = new Circle(100, 85, 10, 0, 2 * Math.PI, 'red');
const circle4 = new Circle(75, 60, 5, 0, 2 * Math.PI, '#000');
const circle5 = new Circle(125, 60, 5, 0, 2 * Math.PI, '#000');
const circle6 = new Circle(100, 170, 50, 0, 2 * Math.PI, 'lightPink');
const circle7 = new Circle(145, 132, 10, 0, 2 * Math.PI, '#lightPink');
const circle8 = new Circle(163, 122, 10, 0, 2 * Math.PI, '#lightPink');
const circle9 = new Circle(50, 135, 10, 0, 2 * Math.PI, '#lightPink');
const circle10 = new Circle(32, 125, 10, 0, 2 * Math.PI, '#lightPink');
const circle11 = new Circle(25, 137, 2.5, 0, 2 * Math.PI, '#000');
const circle12 = new Circle(20, 127, 2.5, 0, 2 * Math.PI, '#000');
const circle13 = new Circle(21, 117, 2.5, 0, 2 * Math.PI, '#000');
const circle14 = new Circle(30, 112, 2.5, 0, 2 * Math.PI, '#000');
const circle15 = new Circle(170, 132, 2.5, 0, 2 * Math.PI, '#000');
const circle16 = new Circle(160, 110, 2.5, 0, 2 * Math.PI, '#000');
const circle17 = new Circle(172, 112, 2.5, 0, 2 * Math.PI, '#000');
const circle18 = new Circle(177, 122, 2.5, 0, 2 * Math.PI, '#000');
const circle19 = new Circle(125, 60, 1, 0, 2 * Math.PI, '#fff');
const circle20 = new Circle(75, 60, 1, 0, 2 * Math.PI, '#fff');
const circle21 = new Circle(100, 85, 2.5, 0, 2 * Math.PI, 'black');

const circles = [circle1,circle2,circle3,circle4,circle5,
                circle6,circle7,circle8,circle9,circle10,
                circle11,circle12,circle13,circle14,circle15,
                circle16,circle17,circle18,circle19,circle20,
                circle21 ]
circles.forEach(circle => circle.draw())
