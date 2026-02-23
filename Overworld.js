// We will have one Overworld but code it as if we could have multiple
class Overworld {
 constructor(config) {// TODO: what exactly is a constuctor? Is it like __init__ in python?
   this.element = config.element; // TODO
   this.canvas = this.element.querySelector(".game-canvas"); // TODO
   this.ctx = this.canvas.getContext("2d"); //Access to drawing methodes
 }

 init() {
  // console.log("hello from the Overworld", this)
  
  // Get overworld image
   const image = new Image();
   image.onload = () => {
     this.ctx.drawImage(image,0,0) //draw image at point (0,0)
   };
   image.src = "/images/maps/DemoLower.png";

   //Get x and y coorinates for the hero and the shadow
  //  const x = 5;
  //  const y = 6;
  
  // // Get shadow image (need to be between overworld and hero)
  //  const shadow = new Image();
  //  shadow.onload = () => {
  //   this.ctx.drawImage(
  //     shadow, 
  //     0, //left cut 
  //     0, //top cut,
  //     32, //width of cut
  //     32, //height of cut
  //     x * 16 - 8,
  //     y * 16 - 18,
  //     32,
  //     32
  //  )
  //  }
  //  shadow.src = "/images/characters/shadow.png";

  // // Get hero image
  //  const hero = new Image();
  //  hero.onload = () => {
  //    this.ctx.drawImage(
  //      hero, 
  //      0, //left cut 
  //      0, //top cut,
  //      32, //width of cut
  //      32, //height of cut
  //      x * 16 - 8,  // * 16 since ever tile is 16x16,  -8 since the sprite may be 32X32 but the art is a little bit smaller
  //      y * 16 - 18, // * 16 since ever tile is 16x16, -18 since the sprite may be 32X32 but the art is a little bit smaller
  //      32, //size/scale of cut x
  //      32  // size/scale of cut y
  //   )
  //  }
  //  hero.src = "/images/characters/people/hero.png";





  // Place some Game Objects
  const hero = new GameObject({
    //Get x and y coorinates for the hero and the shadow
    x: 5,
    y: 6,

  })

  const npc1 = new GameObject({
    x: 7,
    y: 9,
    src: "/images/characters/people/npc1.png"
    
  })

  setTimeout(() => {
    hero.sprite.draw(this.ctx)
    npc1.sprite.draw(this.ctx) 
  }, 200)
  
 }

}