
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
    const canvas = document.querySelector('canvas');
     const ctx = canvas.getContext('2d');

        ctx.beginPath()
        ctx.arc(this.xCordinate, this.yCordinate, this.radius, this.startAngle, this.endAngle)
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}

const x = function () {
   return Math.floor(Math.random() * 1250);
}
const y = function() {  
  return Math.floor(Math.random() * 1250);
}  

const radius = function () {
    return Math.floor(Math.random() * 50);
}

const fillColor = function () {
    return '#' + Math.floor(Math.random() * (256 * 256 * 256));
}
setInterval(() => {
const newCircle = new Circle(x(),y(),radius(), 0, 2 * Math.PI, fillColor());
return newCircle.draw(); 
}, 500)
