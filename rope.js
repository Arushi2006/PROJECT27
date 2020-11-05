class Rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;

      var options=
      {
        bodyA:body1,
        bodyB:body2,
       
        stiffness:0.04,
        length:10
      }
      this.rope=Constraint.create(options);
      World.add(world,this.rope);
    }
    display()
    {
      var pointA=this.rope.body1.position;
      var pointB=this.rope.bodyB.position;

      strokenWeight();

      

      var Anchor1X=pointA.x+this.offsetX;
      var Anchor2Y=pointB.y+this.offsetY;

      line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
  }