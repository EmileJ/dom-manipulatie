var name = "Emile";

var colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
];

function namer(){
    var h1 = document.getElementById("name");
    var color = colors[Math.floor(Math.random()*(colors.length))];
    h1.innerText = "Hi " + name + "!";
    h1.style.color = color;
}