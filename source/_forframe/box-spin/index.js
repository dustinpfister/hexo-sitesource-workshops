forFrame({

    name: 'box-spin',
    init: function (api) {

        this.add('graphics', 'item', function (ff) {

            this.clear();
            this.beginFill(0xff0000);

            var pos = 32 - 32 * ff.bias;
            var size = 64 * ff.bias;

            this.drawRect(pos, pos, size, size);
            this.angle = 360 * ff.per;
            this.endFill();

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
