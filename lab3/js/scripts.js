var cards = document.querySelectorAll(".single-card");
cards.forEach(card => {
    card.addEventListener("mouseover", function(e) {

        console.log("in");
        var recipe = card.querySelector(".card-bottom");
        recipe.style.height = "65px";
    })
    card.addEventListener("mouseout", function(e) {
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode.parentNode == this || e.parentNode == this || e == this) {
            return;
        }
        console.log("out");
        var recipe = card.querySelector(".card-bottom");
        card.querySelector(".card-desciption-additional").style.display = "none";
        recipe.style.height = 0;
    })

    var button = card.querySelector("button");

    button.addEventListener("click", () => {
        card.querySelector(".card-desciption-additional").style.display = "block";
        var recipe = card.querySelector(".card-bottom");
        recipe.style.height = "300px";
    })
});


const scrollTopPageButton = document.getElementById('scroll-button');
const scrolledPage = () => {
    let y = window.scrollY;
    if (y > 0) {
        scrollTopPageButton.className = "top-scroll show";
    } else {
        scrollTopPageButton.className = "top-scroll hide";
    }
};

window.addEventListener("scroll", scrolledPage);

const scrollTopPage = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollTopPage);
        window.scrollTo(0, c - c / 1.3);
    }
};

scrollTopPageButton.onclick = function(e) {
    e.preventDefault();
    scrollTopPage();
}