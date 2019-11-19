var cards = document.querySelectorAll(".single-card");
cards.forEach(card => {
    card.addEventListener("mouseover", function(e) {

        console.log("over");
        var recipe = card.querySelector(".card-bottom");
        recipe.style.height = "300px";
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
    })
});