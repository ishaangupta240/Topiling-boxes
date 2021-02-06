class Box{
  constructor(x,y,width,height){
      var bodyprops={
          restitution: 0.5,
          friction:0.01,
          density:1.0
      }
      this.box=Bodies.rectangle(x,y,width,height,bodyprops);
      this.width=width;
      this.height=height;
      World.add(world,this.box);
      
  }
  display(){
      var bodypos=this.box.position;
      var angle=this.box.angle;
      push();

      translate(bodypos.x,bodypos.y);
      rotate(angle) ;   
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();


      
  }
}