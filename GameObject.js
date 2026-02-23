class GameObject{
    constructor(config) {
        this.x=config.x ||0; //get either given x value or if nothing given 0
        this.y=config.y ||0; //get either given y value or if nothing given 0
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src ||  "/images/characters/people/hero.png",
        });
    }
}