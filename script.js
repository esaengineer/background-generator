var h3=document.querySelector('h3');
var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var body=document.getElementById('body');
console.log(h3);
console.log(color1);
console.log(color2);


function changeColor()
{
	body.style.background = "linear-gradient(to right, "+color1.value+ "," + color2.value+ ")";
    h3.textContent=body.style.background;
}

color1.addEventListener('input',function(){
	// body.style.background = "linear-gradient(to right, "+color1.value+ "," + color2.value+ ")";
changeColor();
})



color2.addEventListener('input',function(){
	// body.style.background = "linear-gradient(to right, "+color1.value+ "," + color2.value+ ")";
changeColor();
})