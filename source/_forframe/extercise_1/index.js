forFrame({

    name: 'hello-world',
    maxFrame: 200,

    init: function () {

        var game = this.game;

        var self = this;
        var i = 0;
        while (i < 4) {

            (function () {

                var val = Math.random() * 255;

                self.addDisp({
                    type: 'graphics',
                    id: 'bx' + (i + 1),
                    forFrame: function () {

                        var gfx = this.disp;

                        gfx.data.w = 20 + 110 * this.bias;
                        gfx.data.h = 20 + 20 * this.bias;
                        //this.data.h = 20;

                        gfx.clear();
                        gfx.beginFill(parseInt(Math.floor(val).toString(16) + '00', 16));
                        gfx.drawRect(0, 0, gfx.data.w, gfx.data.h);
                        gfx.endFill();

                    }
                });

                i += 1;

            }
                ());

        }

    },

    forFrame: function () {

        var bx,
        game = this.game,
        i = 0,

        // deltas for each box
        dx = [110, 90, 110, 90],
        dy = [-75, -25, 55, 5];
        while (i < 4) {

            bx = this.get('bx' + (i + 1)).disp;

            // grid x, and grid y
            var gx = i % 2,
            gy = Math.floor(i / 2),

            sx = 10 + gx * 20,
            sy = 10 + gy * 20 + 100;

            bx.x = sx + dx[i] * this.bias;
            bx.y = sy + dy[i] * this.bias;

            i += 1;

        }

    }

});
