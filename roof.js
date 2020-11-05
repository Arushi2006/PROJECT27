class Roof
  {
    constructor(x,y,width)
    {
        var options=
        {
            isStatic:true,
        }

        this.roof=Bodies.rectangle(x,y,width,20,options);
        this.width=width;
        this.height=20;
        World.add(world,this.roof);


    }

    display()
    {
      rectMode(CENTER);
      rect(this.roof.position.x,this.roof.position.y,this.width,this.height);
    }
  }