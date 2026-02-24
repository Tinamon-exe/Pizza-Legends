// We will have one Overworld but code it as if we could have multiple
class Overworld {
 constructor(config) {// TODO: what exactly is a constuctor? Is it like __init__ in python?
   this.element = config.element; // TODO
   this.canvas = this.element.querySelector(".game-canvas"); // TODO
   this.ctx = this.canvas.getContext("2d"); //Access to drawing methodes
   this.map = null;
 }
 //TODO: What exactly is ctx (see in Sprites.js or OverwoldMaps.js)

 startGameLoop() {
  const step = () => {
    // Clear canvas
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

    // Draw lower Layer
    this.map.drawLowerImage(this.ctx);
    
    // Draw game Objects
    Object.values(this.map.gameObjects).forEach(object => { //Object.values gets the values of a dictionary
      // Get the movements
      object.update({
        arrow: this.directionInput.direction
      });
      object.sprite.draw(this.ctx);
    })

    // Draw lower Layer
    this.map.drawUpperImage(this.ctx);
    requestAnimationFrame(() => { //requestAnimationFrame is a browser callback function (browser calls back whenever new fram begins)
      step();
    }) 
  }
  step();
 }

 init() {
  this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

  this.directionInput = new DirectionInput();
  this.directionInput.init();
  this.startGameLoop();
 }

}