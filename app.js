document.querySelector("#pbtm").innerHTML = `<button id="btn" onclick="start()">Start</button>`;


function start() {
    var timer = 60;
    var score = 0;
    var hitRn = 0;
    var numKey;

    document.querySelector("#timerValue").textContent = 60;
    document.querySelector("#scoreval").textContent = 0;

    function makeBubbles () {

    var clutter = "";

    // responsive
    var x = window.matchMedia("(max-width: 600px)");
    function change(x) {
        if (x.matches) {
            for ( var i=1; i<60; i++) {
                rn =  Math.floor(Math.random()*10);
                clutter += `<div id="bubble" class="bubble">${rn}</div>`;
            }
        } else {
            for ( var i=1; i<134; i++) {
                rn =  Math.floor(Math.random()*10);
                clutter += `<div id="bubble" class="bubble">${rn}</div>`;
            }
        }
    }
    change(x);
    x.addEventListener("change",function() {
        change(x);
    })
    //responsive
    
    document.querySelector("#pbtm").innerHTML = clutter;
    
    }
    
    
    function runTimer() {
        var timerint = setInterval (function() {
            if (timer>0){
                timer--;
                document.querySelector("#timerValue").textContent = timer;
            } else {
                clearInterval(timerint);
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over.<br/> Your score is : <span id="scr">${score}</span></h1><br><button id="btn" onclick="start()">Start Again</button>`;
                
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
        } else {
            dets.target.navigator.vibrate(200);
        }
    })

    runTimer();
    makeBubbles();
    getNewHit();

}






