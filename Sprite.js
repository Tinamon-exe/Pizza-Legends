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
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame =0;

        // Reference the game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x-8; // * 16 since ever tile is 16x16,  -8 since the sprite may be 32X32 but the art is a little bit smaller
        const y = this.gameObject.y-18; // * 16 since ever tile is 16x16, -18 since the sprite may be 32X32 but the art is a little bit smaller

        // Draw Shadow before character
        this.isShadowLoaded && ctx.drawImage(
            this.shadow, 
            x,  
            y,
        )


        // Make sure it is loaded before drawing
        this.isLoaded && ctx.drawImage(
            this.image, 
            0, //left cut 
            0, //top cut,
            32, //width of cut
            32, //height of cut
            x,  
            y , 
            32, //size/scale of cut x
            32  // size/scale of cut y
        )

    }
}