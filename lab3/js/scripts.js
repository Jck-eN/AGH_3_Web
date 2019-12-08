var cards = document.querySelectorAll(".single-card");
cards.forEach(card => {
    card.addEventListener("mouseover", function(e) {
        card.querySelector(".card-image").classList.remove("saturate03");
        card.querySelector(".card-image").classList.remove("saturate10");
        card.querySelector(".card-image").classList.add("saturate06");
        var recipe = card.querySelector(".card-bottom");
        recipe.style.height = "65px";
    })
    card.addEventListener("mouseout", function(e) {
        var e = event.toElement || event.relatedTarget;
        if (e == null) return;
        if (e.parentNode.parentNode == this || e.parentNode == this || e == this) {
            return;
        }
        var recipe = card.querySelector(".card-bottom");
        card.querySelector(".card-desciption-additional").style.display = "none";
        card.querySelector(".card-image").classList.remove("saturate03");
        card.querySelector(".card-image").classList.remove("saturate06");
        card.querySelector(".card-image").classList.add("saturate10");
        recipe.style.height = 0;
    })

    var button = card.querySelector("button");

    button.addEventListener("click", () => {
        card.querySelector(".card-desciption-additional").style.display = "block";
        card.querySelector(".card-image").classList.remove("saturate10");
        card.querySelector(".card-image").classList.remove("saturate06");
        card.querySelector(".card-image").classList.add("saturate03");
        var recipe = card.querySelector(".card-bottom");
        recipe.style.height = "300px";
    })
});


var cake_button = document.querySelector("#cake-zone");
cake_button.addEventListener("click", () => {
    person = prompt("Podaj swoje imię, miłośniku dobrego jedzenia :D");
    if (person == "") {
        cake_button.innerHTML = "Strefa zalogowanego smakosza";
    } else {
        cake_button.innerHTML = "Witaj, " + person + "!";
    }
})


var scrollTopPageButton = document.getElementById('scroll-button');
var scrolledPage = () => {
    var y = window.scrollY;
    if (y > 0) {
        scrollTopPageButton.className = "top-scroll show";
    } else {
        scrollTopPageButton.className = "top-scroll hide";
    }
};

window.addEventListener("scroll", scrolledPage);

var scrollTopPage = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.scrollTo(0, 0);
    }
};

scrollTopPageButton.onclick = function(e) {
    e.preventDefault();
    scrollTopPage();
}

// It's winter soon...
// Let it snow :)

var snowMax = 25;
var snowColor = ["#DDD", "#EEE"];
var snowEntity = "&#x2022;";
var snowSpeed = 0.5;
var snowMinSize = 15;
var snowMaxSize = 50;
var snowRefresh = 40;
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

var snow = [],
    pos = [],
    coords = [],
    left = [],
    marginBottom,
    marginRight;

function randomise(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}

function initSnow() {
    var snowSize = snowMaxSize - snowMinSize;
    marginBottom = document.body.scrollHeight - 5;
    marginRight = document.body.clientWidth - 15;

    for (i = 0; i <= snowMax; i++) {
        coords[i] = 0;
        left[i] = Math.random() * 15;
        pos[i] = 0.03 + Math.random() / 10;
        snow[i] = document.getElementById("flake" + i);
        snow[i].style.fontFamily = "inherit";
        snow[i].size = randomise(snowSize) + snowMinSize;
        snow[i].style.fontSize = snow[i].size + "px";
        snow[i].style.color = snowColor[randomise(snowColor.length)];
        snow[i].style.zIndex = 1000;
        snow[i].sink = snowSpeed * snow[i].size / 5;
        snow[i].posX = randomise(marginRight - snow[i].size);
        snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
        snow[i].style.left = snow[i].posX + "px";
        snow[i].style.top = snow[i].posY + "px";
    }

    moveSnow();
}

function resize() {
    marginBottom = document.body.scrollHeight - 5;
    marginRight = document.body.clientWidth - 15;
}

function moveSnow() {
    for (i = 0; i <= snowMax; i++) {
        coords[i] += pos[i];
        snow[i].posY += snow[i].sink;
        snow[i].style.left = snow[i].posX + left[i] * Math.sin(coords[i]) + "px";
        snow[i].style.top = snow[i].posY + "px";

        if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * left[i])) {
            snow[i].posX = randomise(marginRight - snow[i].size);
            snow[i].posY = 0;
        }
    }

    setTimeout("moveSnow()", snowRefresh);
}

for (i = 0; i <= snowMax; i++) {
    document.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
}

window.addEventListener('resize', resize);
window.addEventListener('load', initSnow);;