forFrame({

    name: 'box-spin',
    init: function (api) {

        this.add('graphics', 'item', function () {

            this.beginFill(0xff0000);
            this.drawRect(-50, -50, 100, 100);
            this.endFill();

        });

    },

    forFrame: function () {

        var item = this.get('item');

    }

});
/*
forFrame.add({

name: 'box spin',

init: function (api) {

// and a single box with the id 'theBox';
api.addBox.call(this, 'theBox');

},

forFrame: function (api) {

var bx = api.get.call(this, 'theBox');

bx.w = 32;
bx.h = 32;

let cx = this.canvas.width / 2 - bx.w / 2;
let cy = this.canvas.height / 2 - bx.h / 2;

let r = Math.PI * 2 * this.per;

bx.x = cx + Math.cos(r) * 100;
bx.y = cy + Math.sin(r) * 100;

}

});
*/
