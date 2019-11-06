/* LAB 7-1 - FINAL COUNTDOWN!! */
//Please delete once you have confirmed your page is connected...seriously, if I see this popup when I check out your work, I will go coo-coo bananas.

//create page load listener
window.onload = pageready;

//create page load function
function pageready(){
	
	//create variables for required HTML elements
	var todayData = document.getElementById("todayData");
	var finalData = document.getElementById("finalData");
	var dueData =  document.getElementById("dueData");
	var timelabel = document.getElementById("timelabel");
	var countMsg =  document.getElementById("countMsg");
	//create variables for now date and due date
	var dateVar = new Date();
	var nowDateTime = dateVar.getTime();
	
	var dueDate = new Date("December 11, 2020 23:59:00");
	
	var compareDate = new Date("December 11, 2019 23:59:00");
	compareDate = new Date(compareDate.getTime());
	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	dueDate = new Date(dueDate.getTime());
	var timeDiff = dueDate - nowDateTime;
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var daysTillDueDate = timeDiff/86400000;
    var fullDays = Math.floor(daysTillDueDate) ;
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	todayData.innerHTML = dateVar.toDateString();
	finalData.innerHTML = dueDate .toDateString();
	dueData.innerHTML = fullDays;
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if(dueDate > compareDate)
	{
		countMsg.innerHTML = "the deadline for the final Assignment has passed";
	}
	
}