class Sprite {
    constructor(config) {
        //Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        };
        
        // Shadow
        this.shadow = new Image();
        this.useShadow=true;
        if (this.useShadow){
            this.shadow.src = "/images/characters/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }
        

        // Configuring animation & initial state
        this.animations=config.animations ||{
            "idle-up": [[0,2]],
            "idle-down": [[0,0]],
            "idle-left": [[0,3]],
            "idle-right": [[0,1]],
            "walk-up": [[1,2],[2,2],[3,2],[0,2]],
            "walk-down": [[1,0],[2,0],[3,0],[0,0]],
            "walk-left": [[1,3],[2,3],[3,3],[0,3]],
            "walk-right": [[1,1],[2,1],[3,1],[0,1]],
        }
        this.currentAnimation = config.currentAnimation || "idle-down";
        this.currentAnimationFrame =0;

        //Create a notion of time
        this.animationFrameLimit = config.animationFrameLimit|| 8;
        //How much time till next fram
        this.animationFrameProgress = this.animationFrameLimit
        
        // Reference the game object
        this.gameObject = config.gameObject;
    }
    
    //Gets which animation we are on and which animation frame we are on
    get frame(){
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    // Set animation when moving with key:
    setAnimation(key){
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        // Downtake game progress
        if (this.animationFrameProgress>0){
            this.animationFrameProgress -= 1;
            return;
        }

        // Reset counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame+=1;
        if(this.frame===undefined){
            this.currentAnimationFrame =0;
        }
    }

    draw(ctx, cameraPerson) {
        const x = this.gameObject.x-8+utils.withGrid(10.5)-cameraPerson.x;  // -8 since the sprite may be 32X32 but the art is a little bit smaller, utils.withGrid(10.5) beacause the canvas is 22 tiles long so (22-1)/2=10.5, -cameraPerson.x to keep cameraperson in the middle
        const y = this.gameObject.y-18+utils.withGrid(6)-cameraPerson.y; // -18 since the sprite may be 32X32 but the art is a little bit smaller, utils.withGrid(10.5) beacause the canvas is 13 tiles heigh so (13-1)/2=6, -cameraPerson.y to keep cameraperson in the middle

        // Draw Shadow before character
        this.isShadowLoaded && ctx.drawImage(
            this.shadow, 
            x,  
            y,
        )

        const [framx,framy]= this.frame;

        // Make sure it is loaded before drawing
        this.isLoaded && ctx.drawImage(
            this.image, 
            framx *32, //left cut 
            framy *32, //top cut,
            32, //width of cut
            32, //height of cut
            x,  
            y , 
            32, //size/scale of cut x
            32  // size/scale of cut y
        )
        
        this.updateAnimationProgress();
    }
    
}