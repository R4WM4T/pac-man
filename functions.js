function imageToMap(url, callBack) {

    // crée un canvas pr modifier l'image
    $('body').append('<canvas id="map2canvas" style="position:absolute; left:-9999px;"></canvas>');
    var context = document.getElementById('map2canvas').getContext('2d');

    var img = new Image();
    img.src = url;
    img.onload = function () {

        var w = img.width;
        var h = img.height;
        console.log(w, h);
        context.drawImage(img, 0, 0);
        var data = context.getImageData(0, 0, w, h).data;
        console.log(data);

        var map = [];
        var i = 0;

        // récupère les data de chaques pixels
        for (var x = 0; x < w; x++) {
            map[x] = [];
            for (var y = 0; y < h; y++) {

                var v1 = data[((w * y) + x) * 4] > 127 ? 4 : 0;     // R
                var v2 = data[((w * y) + x) * 4 + 1] > 127 ? 2 : 0; // V
                var v3 = data[((w * y) + x) * 4 + 2] > 127 ? 1 : 0; // B

                map[x][y] = v1 + v2 + v3;
            }
        }

        // suppr le canvas
        $('#map2canvas').remove();

        callBack(map);
    };
}

function testCollision(a, b) {

    //----
    // collision à plus de 50%
    // Renvoie seulement le 1er elmt trouvé pr raison de performance
    //----

    var ahw = a.width() / 2;
    var ahh = a.height() / 2;
    var aXmin = a.offset().left + ahw / 2;
    var aXmax = aXmin + ahw;
    var aYmin = a.offset().top + ahh / 2;
    var aYmax = aYmin + ahh;
    var collider = $();

    b.each(function (i, elm) {

        var elm = $(elm);

        var bhw = elm.width() / 2;
        var bhh = elm.height() / 2;
        var bXmin = elm.offset().left + bhw / 2;
        var bYmin = elm.offset().top + bhh / 2;

        if (aXmax <= bXmin || aYmax <= bYmin || aXmin >= bXmin + bhw || aYmin >= bYmin + bhh) {
            return; // passe le tour car pas de collisions possibles
        } else {
            collider = elm;
            return false; // quitte le .each()
        }
    });

    return collider;
}

function checkCases(pos) {

    var x = Math.round(pos[0] / tailleCase);
    var y = Math.round(pos[1] / tailleCase);

    return casesLibres = {
        h: $('.sol.x' + x + '.y' + (y - 1)).length,
        d: $('.sol.x' + (x + 1) + '.y' + y).length,
        b: $('.sol.x' + x + '.y' + (y + 1)).length,
        g: $('.sol.x' + (x - 1) + '.y' + y).length
    };
}

// check si l'element est pile sur une case
function surCase(pos) {
    return Math.round(pos[0] / vitesseMax) * vitesseMax % tailleCase === 0 && Math.round(pos[1] / vitesseMax) * vitesseMax % tailleCase === 0;
}
