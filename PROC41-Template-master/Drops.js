class Drops{
    constructor(x,y){
       var options ={
           friction=0.001,
           restitution=0.1
       } 
       this.rain = Bodies.circles(x,y,5,options)
       this.radious=5;
       World.add(world,this.rain);

    }
update(){
if(this.rain.position.y>height){
    Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})

}
showDrop()
    fill("blue");
ellipseMode(CENTER)
ellipse(this.rain.position.x,this.rain.position.y,this.radious,this.radius)

}
}
