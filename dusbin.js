 class Dustbin{
constructor(x,y){
  this.x = x;
  this.y = y;
  this.dustbinwidth = 150;
  this.dustbinheight = 180;
  this.wallthickness = 20;

  this.image = loadImage("dustbingreen.png");
  this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true});
  

  this.leftwallbody = Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,
    this.wallthickness,this.dustbinheight,{isStatic:true});

    
this.rightwallbody = Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,
        this.wallthickness,this.dustbinheight,{isStatic:true});
    
        World.add(world,this.bottombody)
        World.add(world,this.leftwallbody)
        World.add(world,this.rightwallbody)

}
display(){
    var posbottom = this.bottombody.position
    var posleft = this.leftwallbody.position
    var posrigth = this.rightwallbody.position

    push()
    translate(posleft.x,posleft.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    rotate(this.angle)
    pop()

    push()
    translate(posrigth.x,posrigth.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    rotate(-1*this.angle)
    pop()

    push()
    translate(posbottom.x,posbottom.y+10)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    imageMode(CENTER)
    image(this.image,0,-this.dustbinheight/2,this.dustbinwidth,this.dustbinheight)
    pop()




}
 }
 