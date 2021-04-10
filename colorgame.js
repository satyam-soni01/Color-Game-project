var numsquares = 6;
var colors = generatecolors(numsquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn")
var hardbtn = document.querySelector("#hardbtn")

var pickedcolor = pickcolor();

colorDisplay.textContent = pickedcolor;

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares = 3;
	colors = generatecolors(numsquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;

	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "None";
		}
	}
})
hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquares = 6;
	colors = generatecolors(numsquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;

	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	colors = generatecolors(numsquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;
	message.textContent = "";
	this.textContent = "New Colors";

	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	
	h1.style.backgroundColor = "steelblue";
})

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor)
		{
			resetButton.textContent = "Play Again?";
			message.textContent = "Correct!"
			changecolors(clickedcolor);
			h1.style.background = clickedcolor;
		}
		else
		{
			message.textContent = "Try Again!"
			this.style.backgroundColor = "#232323";
		}
	});
}

function changecolors(color){
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatecolors(num){
	var arr = [];
	for(var i = 0; i < num; i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}