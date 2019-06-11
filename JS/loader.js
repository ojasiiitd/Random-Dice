var dice = document.querySelectorAll("i.die");
var numb = document.querySelector("p.numbers");
var generate = document.querySelector(".button")

generate.addEventListener("click" , roll);

function roll()
{
    for(var i=0 ; i<12 ; i++)
        dice[i].style.display = "none";

    var first = getRandomInt(6) , second = getRandomInt(6);

    console.log(first + " " + second)

    dice[first].style.display = "inline";
    dice[6+second].style.display = "inline";

    numb.innerHTML = (first+1) + " and " + (second+1);
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}