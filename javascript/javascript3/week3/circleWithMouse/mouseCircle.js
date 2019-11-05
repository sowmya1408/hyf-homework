

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


document.addEventListener('mousemove', (event) => { 
const newCircle = new Circle(event.clientX,event.clientY,Math.floor(Math.random() * 50), 0, 2 * Math.PI, `#${Math.floor(Math.random() * (256 * 256 * 256))}`)
return newCircle.draw(); 
})

