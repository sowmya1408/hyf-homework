
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

const x = function (xCordinate) {
   return Math.floor(Math.random() * xCordinate);
}
const y = function(yCordinate) {  
  return Math.floor(Math.random() * yCordinate);
}  

const radius = function (r) {
    return Math.floor(Math.random() * r);
}

const fillColor = function (color) {
    return '#' + Math.floor(Math.random() * color);
}
setInterval(() => {
const newCircle = new Circle(x(1250),y(1250),radius(50), 0, 2 * Math.PI, fillColor(1250));
return newCircle.draw(); 
}, 500)
