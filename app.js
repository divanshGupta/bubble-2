var timer = 60;
var score = 0;
var hitRn = 0;
var numKey;
function makeBubbles () {
    var clutter = "";

for ( var i=1; i<134; i++) {
    rn =  Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
    var timerint = setInterval (function() {
        if (timer>0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over. Your score was ${score}</h1>`;
        }
    }, 1000);
}
function getNewHit() {
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitRn;
}
function increaseScore () {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener ("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitRn) {
        increaseScore();
        makeBubbles();
        getNewHit();
    }
})



document.addEventListener('keydown', function(dets) {
    switch(dets.keyCode) {
        case 0:
            if (numKey === hitRn) {
                increaseScore();
                makeBubbles();
                getNewHit();
        }
          break;
        case dets.keyCode==97:
            numKey = 1;
            if (numKey === hitRn) {
                increaseScore();
                makeBubbles();
                getNewHit();
        }
          break;
          case dets.keyCode==98:
            numKey = 2;
            if (numKey === hitRn) {
              increaseScore();
              makeBubbles();
              getNewHit();
          }
          break;
          case dets.keyCode==99:
            numKey = 3;
            if (numKey === hitRn) {
              increaseScore();
              makeBubbles();
              getNewHit();
          }
          break;
          case dets.keyCode==100:
            numKey = 4;
            if (numKey === hitRn) {
              increaseScore();
              makeBubbles();
              getNewHit();
          }
          break;
          case dets.keyCode==101:
            numKey = 5;
            if (numKey === hitRn) {
              increaseScore();
              makeBubbles();
              getNewHit();
          }
          break;
          case dets.keyCode==102:
            numKey = 6;
            if (numKey === hitRn) {
              increaseScore();
              makeBubbles();
              getNewHit();
          }
          break;
          case dets.keyCode==103:
            numKey = 7;
            if (numKey === hitRn) {
              increaseScore();
              makeBubbles();
              getNewHit();
          }
          break;
          case dets.keyCode==104:
            numKey = 8;
            if (numKey === hitRn) {
              increaseScore();
              makeBubbles();
              getNewHit();
          }
          break;
          case dets.keyCode==105:
            numKey = 9;
            if (numKey === hitRn) {
              increaseScore();
              makeBubbles();
              getNewHit();
          }
          break;
      }
});






runTimer();
makeBubbles();
getNewHit();