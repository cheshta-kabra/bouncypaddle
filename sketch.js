var ball,img,paddle;
function preload() {

}
function setup() {
  createCanvas(400, 400);
   
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
}

function draw() {
  background(205,153,0);
  ball=createSprite(200,200,20,20);
  paddle=createSprite(380,300,10,50);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  drawSprites();
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

