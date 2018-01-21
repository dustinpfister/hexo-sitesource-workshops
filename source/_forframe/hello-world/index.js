forFrame({

    name: 'hello-world',
    maxFrame: 500,

    init: function (api) {

        var game = this.game;

        this.add('graphics', 'bx1', function (ff) {

            this.data.h = game.height / 6;
            this.data.w = game.width / 2;

            this.clear();
            this.beginFill(0x00ff00);
            this.drawRect(0, 0, this.data.w, this.data.h);
            this.endFill();

        });

        this.add('graphics', 'bx2', function (ff) {

            this.data.h = game.height / 6;
            this.data.w = game.width / 2;

            this.clear();
            this.beginFill(0x0000ff);
            this.drawRect(0, 0, this.data.w, this.data.h);
            this.endFill();

        });

    },

    forFrame: function () {

        var bx = this.get('bx1').disp,
        game = this.game;

        //game.transparent = false;
        //game.stage.backgroundColor = '#ff0000';

        bx.x = 0 + bx.data.w * this.bias - bx.data.w;
        bx.y = game.height / 2 - bx.data.h / 2;
        bx.alpha = this.bias;

        bx = this.get('bx2').disp;

        bx.x = game.width-bx.data.w * this.bias;
        bx.y = game.height / 2 - bx.data.h / 2;
        bx.alpha = this.bias;

    }

});
