import React, {useState,useEffect} from 'react'
import {Wrapper,Heading,Canvas,Me} from './styled'
import harry from'./harry.jpg'

const Animate = ()=>{
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
    useEffect(()=>{
        const canvas = document.getElementById('canvas').getContext('2d');
        console.log(canvas)
        
        var img = new Image()
        img.src = `./harry.jpg`
        console.log(img)
        img.onload=()=>{
            canvas.drawImage(img,0,0,255,255)

        }
        document.addEventListener('resize',()=>{
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        })
    })
    
    return(
        <>
            <Canvas id="canvas" width={`${width}`} height={`${height}`}></Canvas>
        </>
    )
}
// 
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight*0.8;
// console.log(HTMLCanvasElement);
// var c = canvas.getContext('2d');
// function distance(x1,y1,x2,y2){
//     const xDist = x2 - x1;
//     const yDist = y2 - y1;
//     return Math.sqrt(Math.pow(xDist,2)+Math.pow(yDist,2));
// }
// function rotate(velocity, angle) {
//     const rotatedVelocities = {
//         x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
//         y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
//     };

//     return rotatedVelocities;
// }
// function resolveCollision(particle, otherParticle) {
//     const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
//     const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

//     const xDist = otherParticle.x - particle.x;
//     const yDist = otherParticle.y - particle.y;

//     // Prevent accidental overlap of particles
//     if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

//         // Grab angle between the two colliding particles
//         const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

//         // Store mass in var for better readability in collision equation
//         const m1 = particle.mass;
//         const m2 = otherParticle.mass;

//         // Velocity before equation
//         const u1 = rotate(particle.velocity, angle);
//         const u2 = rotate(otherParticle.velocity, angle);

//         // Velocity after 1d collision equation
//         const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
//         const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

//         // Final velocity after rotating axis back to original location
//         const vFinal1 = rotate(v1, -angle);
//         const vFinal2 = rotate(v2, -angle);

//         // Swap particle velocities for realistic bounce effect
//         particle.velocity.x = vFinal1.x;
//         particle.velocity.y = vFinal1.y;

//         otherParticle.velocity.x = vFinal2.x;
//         otherParticle.velocity.y = vFinal2.y;
//     }
// }
// function Circle(x,y,radius,color) {
//     this.x = x;
//     this.y= y;
//     this.velocity = {
//         x:(Math.random()-0.5)*5,
//         y:(Math.random()-0.5)*5,
//     };
   
//     this.ddx=0;
//     this.ddy=0;
//     this.mass = 1;
//     this.radius = radius;
//     this.minRadius = radius;
//     this.color = color;
//     this.draw= function(){
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
//     c.fillStyle = this.color;
//     c.fill();
//     }
//     this.update = function() {
//         for(let i = 0; i<circleArray.length; i++){
//             if(distance(this.x,this.y,circleArray[i].x,circleArray[i].y)!==0){
//                     if(distance(this.x,this.y,circleArray[i].x,circleArray[i].y)<circleArray[i].radius+this.radius){
//                        resolveCollision(this, circleArray[i])
//                     }
                
//                 }

//         }
//         if(this.x>(canvas.innerWidth-this.radius) || this.x<(0+this.radius)){
//             this.velocity.x =-this.velocity.x;
//             }
//             if(this.y>(canvas.innerHeight-this.radius) || this.y<(0+this.radius)){
//                 this.velocity.y=-this.velocity.y;
//                 }
//             this.x+=this.velocity.x;
//             this.y+=this.velocity.y;
//             //gravity mouse??
            
        
//             //interact with mouse
          
//             this.draw();
//     }
// }
// var circleArray = [];
// for(let i=0; i<200; i++){
//     var x = Math.random()*(canvas.innerWidth-radius*2)+radius;
// var y = Math.random()*(canvas.innerHeight-radius*2)+radius;

// var radius = (Math.random()*20+1);
// var color1 = Math.floor(Math.random()*255).toString(16);
// var color2 = Math.floor(Math.random()*255).toString(16);
// var color3 = Math.floor(Math.random()*255).toString(16);

// var color = '#'+color1+color2+color3;

// circleArray.push(new Circle(x,y,radius,color))
// }
// function animate() {
  
//     requestAnimationFrame(animate)
//     c.clearRect(0,0,canvas.innerWidth,canvas.innerHeight);
//     for(let i=0; i<circleArray.length; i++){
//         circleArray[i].update(circleArray);
//     }
    
//     // circle.draw();
//     // circle.update();
// }
// animate();
export default Animate;