class Spiderman {
    constructor(game) {
        this.game = game;
        print(ASSET_MANAGER.getAsset("./Spiderman_Crawl.png"));
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Spiderman_Crawl.png"), 3, 0, 38, 70, 4, 0.2);
        
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);

    };

}