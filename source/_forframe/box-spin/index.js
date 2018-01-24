forFrame({

    name: 'box-spin',
    init: function () {

        this.addDisp({
            id: 'item',
            type: 'graphics',
            forFrame: function () {

                var gfx = this.disp;

                gfx.clear();
                gfx.beginFill(0xff0000);

                var pos = 32 - 32 * this.bias;
                var size = 64 * this.bias;

                gfx.drawRect(pos, pos, size, size);
                gfx.angle = 360 * this.per;
                gfx.endFill();

            }
        });

    },

    forFrame: function () {

        var bx = this.get('item').disp;

        bx.w = 16;
        bx.h = 16;

        var cx = this.width / 2 - bx.w / 2;
        var cy = this.height / 2 - bx.h / 2;

        var r = Math.PI * 2 * this.per;

        bx.x = cx + Math.cos(r) * 50;
        bx.y = cy + Math.sin(r) * 50;

    }

});
