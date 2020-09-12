class Platform{
    constructor(x,y,blockWidth){
        this.x = x;
        this.y = y;
        //plat is the main plank. the second one is the colored border
        this.blockWidth = blockWidth;
        this.plat2 = createSprite(this.x,this.y,50*this.blockWidth+5,55);
        this.plat2.shapeColor = "blue";
        this.plat = createSprite(this.x,this.y,50*this.blockWidth,50);
        //this.plat.shapeColor = "blue";
        
        this.score = true;
        //platforms.push(this.plat)
    }
    setObjective(){
        //u got on the platform
        this.plat.shapeColor = "yellow";
    }
    reset(x,y,blockWidth2){
        this.plat.x = x;
        this.plat2.x = x;
        this.plat.y = y;
        this.plat2.y = y;
        this.plat.width = blockWidth2*50;
        this.plat2.width = blockWidth2*50 + 5;
        this.plat.setCollider('rectangle',0,0,blockWidth2*50,50);
        switch(blockWidth2){
            case 1:
                this.plat.addImage(plank1);
                break;

            case 2:
                this.plat.addImage(plank2);
                break;
                
            case 3:
                this.plat.addImage(plank3);
                break;
                
            case 4:
                this.plat.addImage(plank4);
                break;
                
            case 5:
                this.plat.addImage(plank5);
                break;
                
            case 6:
                this.plat.addImage(plank6);
                break;
                
            case 8:
                this.plat.addImage(plank8);
                break;
                
            case 12:
                this.plat.addImage(plank12);
                break;
                
            case 10:
                this.plat.addImage(plank10);
                break;
                
            case 20:
                this.plat.addImage(plank20);
                break;
                
        }
        
    }
    
}