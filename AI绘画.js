var left = 0;
var timer;
leftmove();
function leftmove() {
    if (left <= -300) {
        left = 0
    }
    document.getElementById('imglist').style.marginLeft = left + "%";
    var breaktime;
    if (left % 100 == 0) {
        breaktime = 2000;
    } else {
        breaktime = 10;
    }
    left -= 1;
    timer = setTimeout(leftmove,breaktime);
}

var timer2;
var timer3;
var timer4;
var musicclick = document.getElementById('musicbutton');
var word = document.getElementById('word');
var musictop = -20;
var movetime = 10;
var musicleft = 45;
var len = 200;
var first = 0;
var audio = document.createElement("audio")
audio.src = "星茶会.mp3";
cur();
function cur(){
    if (musictop >= 35){
        word.innerText = "点击\n浏览"
        return;
    }
    musictop += 1;
    musicclick.style.top = String(musictop) + "%";
    timer2 = setTimeout(cur,movetime);  
}


function musicplay() {
    if (audio.paused){
        audio.play();
        word.innerText = "停止\n播放";
    } else {
        audio.pause();
        word.innerText = "开始\n播放"
    }
}

musicclick.onclick = function(){
    if (first == 0){
        cur2();
        document.getElementById('carousel').style.opacity = 1;
        first = 1;
    }
    musicplay();
}
function cur2(){
    if (musictop <= 5 ){
        word.innerText = "停止\n播放";
        word.style.fontSize = "25px";
        return;
    }
    len -= 3.5
    musictop -= 1;
    musicleft += 1.4;
    musicclick.style.width = String(Math.trunc(len)) + "px";
    musicclick.style.height = String(Math.trunc(len)) + "px";
    musicclick.style.top = String(musictop) + "vh";
    musicclick.style.left = String(Math.trunc(musicleft)) + "%";
    timer3 = setTimeout(cur2,movetime);
}