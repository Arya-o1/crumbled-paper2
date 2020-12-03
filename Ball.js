class Paper{
	constructor(x,y,r)
	{
		var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
		}
		
		this.body=Bodies.circle(x, y, (r)/2, options);
		this.r=r;
        this.image = loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			// rectMode(CENTER)
			// //strokeWeight(4);
			// fill(255)
			// ellipse(0,0,this.r,this.r);
			image(this.image,0,0,40,40)
			pop()
			
	}

}