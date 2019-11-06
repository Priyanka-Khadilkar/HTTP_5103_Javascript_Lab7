/* LAB 7.2 - STOP TIME */

//create page load listener
window.onload = pageready;
//create page load function
function pageready(){
	//create variables for required HTML elements
	var hoursOut = document.getElementById("hoursOut");
	var minsOut = document.getElementById("minsOut");
	var secsOut =  document.getElementById("secsOut");
	var btnStart = document.getElementById("btnStart");
	var btnStop = document.getElementById("btnStop");

	//create time variable so all functions have access to it
	var tickTock;
	var dateVar,hours,mins,secs;
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime()
	{
		dateVar = new Date();
		hours = dateVar.getHours();
		hoursOut.innerHTML = hours + ":";
		
		mins = dateVar.getMinutes();
		minsOut.innerHTML = mins+ ":";
		
		secs = dateVar.getSeconds();
		secsOut.innerHTML = ("0" + parseInt(secs)).slice(-2);
        		
	}
	//CREATE FUNCTION TO START THE CLOCK.
	function start()
	{		
		displayTime();
		tickTock = setInterval(displayTime,1000);
		
	}
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function stop(){
		
		clearInterval(tickTock);
	}
	
	// SET EVENT LISTENERS
	btnStart.onclick = start;
	btnStop.onclick = stop;
	
	
}