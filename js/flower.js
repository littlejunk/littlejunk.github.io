 // 花瓣飘落背景
 function creatdiv(i) {
    var w = document.body.clientWidth - 20;
    var h = document.body.clientHeight - 20;
    var seed = Math.random() * 10;
    var snow = document.createElement('img');
    snow.id = 'img' + i;
    snow.style.position = 'absolute';
    if (seed < 2) {
        snow.src = 'image/f11.png';
    } else if (seed < 4) {
        snow.src = 'image/f12.png';
    } else if (seed < 6) {
        snow.src = 'image/f13.png';
    } else if (seed < 8) {
        snow.src = 'image/f14.png';
    } else {
        snow.src = 'image/f15.png';
    }
    // snow.src = 'image/snow.jpg';
    snow.style.width = '20px';
    snow.style.height = '20px';
    snow.style.top = Math.random() * h + 'px';
    snow.style.left = Math.random() * w + 'px';
    var body = document.body;
    body.insertBefore(snow, body.lastChild);
}
for (var i = 0; i < 100; i++) {
    creatdiv(i);
}
function show(div) {
    var w = document.body.clientWidth - 20;
    var h = document.body.clientHeight - 20;
    var mx = Math.random() * 2 + 0.2;
    var my = Math.random() * 0.5 + 1;
    var str1 = div.style.left;
    var str2 = div.style.top;
    str1 = str1.replace('p', '');
    str1 = str1.replace('x', '');
    var x = Number(str1);
    str2 = str2.replace('p', '');
    str2 = str2.replace('x', '');
    var y = Number(str2);
    var id = setInterval(move, 10);
    function move() {
        x += mx;
        y += my;
        if (x > w) {
            x = Math.random() * w;
            y = Math.random() * h * 0.5;
            mx = Math.random() * 2 + 0.2;
        }
        if (y > h) {
            x = Math.random() * w;
            y = Math.random() * h * 0.5;
            my = Math.random() * 0.5 + 1;
        }
        if (x < 0) {
            x = 0;
            mx = Math.random() * 2 + 0.2;
        }
        if (y < 0) {
            y = 0;
            my = Math.random() * 0.5 + 1;
        }
        div.style.left = x + "px";
        div.style.top = y + "px";
    }

}
for (var i = 0; i <100; i++) {
    var div = document.getElementById('img' + i);
    show(div);
}