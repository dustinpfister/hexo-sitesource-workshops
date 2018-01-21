forFrame({

    name: 'hello-world',
    maxFrame: 500,

    init: function (api) {

        var game = this.game;

        var i = 0;
        while (i < 4) {

            this.add('graphics', 'bx' + (i + 1), function (ff) {

                this.data.h = 20
                    this.data.w = 20;

                this.clear();
                this.beginFill(0x00ff00);
                this.drawRect(0, 0, this.data.w, this.data.h);
                this.endFill();

            });

            i += 1;
        }

    },

    forFrame: function () {

        var bx,
        game = this.game,
        i = 0;
        while (i < 4) {

            bx = this.get('bx' + (bx + 1)).disp;
            bx.x = 10 + 20 * i;

            i += 1;

        }

    }

});
