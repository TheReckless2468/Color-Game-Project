var numSquares=6;
var colors=generateRandomColors(numSquares);
var selected_color=pickColor();
var squares=document.querySelectorAll(".square");
var colordisplay=document.getElementById("colorDisplay");
colordisplay.textContent=selected_color;
var message=document.querySelector(".message_display");
var h1=document.querySelector("h1");
var resetButton=document.querySelector(".reset");
var easy=document.getElementById("easybut");
var hard=document.getElementById("hardbut");
easy.addEventListener("click",function(){
	numSquares=3;
	colors=generateRandomColors(numSquares);
	easy.classList.add("selected");
	hard.classList.remove("selected");
	selected_color=pickColor();
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	colordisplay.textContent=selected_color;

});
hard.addEventListener("click",function(){
	numSquares=6;
	colors=generateRandomColors(numSquares);
	easy.classList.remove("selected");
	hard.classList.add("selected");
	selected_color=pickColor();
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";

	}
	colordisplay.textContent=selected_color;


});
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	selected_color=pickColor();
	h1.style.backgroundColor="steelblue";
	message.textContent="";

	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	colordisplay.textContent=selected_color;
	resetButton.textContent="New Colors";
})

for(var i=0;i<colors.length;i++)
{
	//add intial colors to squares.
	squares[i].style.backgroundColor=colors[i];
	//grab color of clicked square.

	squares[i].addEventListener("click",function(){
		var clicked_color=this.style.backgroundColor;
		if(clicked_color===selected_color)
		{
			message.textContent="Correct";
			ChangeColor(clicked_color);
			h1.style.backgroundColor=clicked_color;
			resetButton.textContent="Play Again";


		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	});
}
function ChangeColor(color){
	//loop through all squares so that to change them to one color
	for(var i=0;i< squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}

}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an empty array
	var arr=[]
	//repeat num times
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor())
	}
	//return the array
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g=Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r+", "+g +", "+b+")";

}

