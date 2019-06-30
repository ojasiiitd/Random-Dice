const dice = document.querySelectorAll("i.die");
const numb = document.querySelector("p.numbers");
const generate = document.querySelector(".button")
const history = document.querySelector("#history");
var storage = [];
const historyBox = document.getElementById("showHis");
const deleteBox = document.querySelector(".delete");
const historySpan = document.querySelector(".notif");

window.addEventListener("keydown" , enterRoll);
generate.addEventListener("click" , roll);

function roll()
{
    history.style.display = "inline";
    if(historyBox.style.display == "block")
        historyBox.style.display = "none";
    
    for(var i=0 ; i<12 ; i++)
        dice[i].style.display = "none";

    var first = getRandomInt(6) , second = getRandomInt(6);

    dice[first].style.display = "inline";
    dice[6+second].style.display = "inline";

    numb.innerHTML = "(" + (first+1) + " and " + (second+1) + ")" + " <br>Sum = " + (first+1 + second+1);
    
    storage.push([first+1 , second+1]);
}

function enterRoll()
{
    if(event.keyCode === 13)
        generate.click();
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

history.addEventListener("click" , showHistory);
deleteBox.addEventListener("click" , hideHis);

function showHistory()
{
    historyBox.style.display = "block";
    historySpan.innerHTML = "<h1 class=\"subtitle\">From Last Numbers To First Numbers (after reload)</h1>";
    
    var strHistory = "";
    for(var i=0 ; i<storage.length ; i++)
        strHistory += "("+ (storage[i][0]) + " , " + (storage[i][1]) + ") with Sum => <u>" + (storage[i][0]+storage[i][1]) + "</u><br>";

    historySpan.innerHTML += strHistory;
}

function hideHis()
{
    historyBox.style.display = "none";
}