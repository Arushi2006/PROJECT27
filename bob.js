class Bob
  {
    constructor(x,y,radius)
    {
    
    
        var  boboptions=
        {
            isStatic:false,
            restitution:0.3
        }
       this.bob=Bodies.circle(x,y,radius,boboptions);
       this.radius=radius;
	   World.add(world,this.bob);

    }
    display()
    {
      Matter.Bodies.circle(this.bob.position.x,this.bob.position.y,this.radius,this.radius);
    }
}