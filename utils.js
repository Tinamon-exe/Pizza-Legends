const utils = {
    //Grit is 16x16 so just get the grit position in integer instead of 16, 32...
    withGrid(n) {
        return n * 16 // * 16 since ever tile is 16x16,  
    },

    asGridCoord(x,y){
        return `${x*16},${y*16}`;
    },

    nextPosition(initialx,initialy,direction) {
        let x = initialx;
        let y = initialy;
        const size =16;
        if (direction ==="left"){
            x-=size
        } else if (direction ==="right"){
            x+=size
        } else if (direction ==="up"){
            y-=size
        } else if (direction ==="down"){
            y+=size
        }
        return {x,y}
    }
    
}
