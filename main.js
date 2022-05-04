// Initiliazing all variables related to score.
let score = 0;
let perClick = 1;
let perSecond = 1;
let costPerClick = 5;
let costPerSecond = 5;

// The primary way in which the score increments.
function add() {
    score += perClick;
    document.getElementById("score").innerText = score;
}



function upgradePerClick() {
    if (score < costPerClick) {
        return;
    } else {
        perClick += 2;
        score -= costPerClick;
        costPerClick += 5;
        perClick += 1;
        document.getElementById("score").innerText = score;
        document.getElementById("clickcost").innerText = costPerClick;
    }
}

function upgradePerSecond() {
    if (score < costPerSecond) {
        return;
    } else {
        perSecond += 2;
        score -= costPerSecond;
        costPerSecond += 5;
        perSecond += 1;
        document.getElementById("score").innerText = score;
        document.getElementById("secondcost").innerText = costPerSecond;
    }
}

setInterval(function() {
    score += perSecond;
    document.getElementById("score").innerText = score;
}, 1000);