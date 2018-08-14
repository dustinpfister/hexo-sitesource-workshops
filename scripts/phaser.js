
// PHASER TAG

/*
// if I just want the standard game container, and link to phaser
{% phaser %}

// A certain version of phaser
{% phaser '' '2.6.2' %}

// if I have a phaser project *.js
{% phaser '/js/phaser_demos/phaser-buttons/main.js' %}

// many files
{% phaser ['/js/phaser_demos/phaser-buttons/game.js'','/js/phaser_demos/phaser-buttons/boot.js'] %}

 */
hexo.extend.tag.register('phaser', function (projectSRC, version) {

    version = version || '2.8.8';

    // start with div container
    var html = '<div id=\"gamearea\" style=\"width:100%;background:#afafaf;\"><\/div>';

    // add phaser
    html += '<script src=\"/js/phaser/'+version+'/phaser.min.js\"><\/script>';

    // add additional scripts
    if (projectSRC) {

        if (typeof projectSRC === 'string') {

            html += '<script src=\"' + projectSRC + '\"><\/script>';

        } else {

            projectSRC.forEach(function (path) {

                html += '<script src=\"' + path + '\"><\/script>';

            });

        }

    }

    return html;

});
