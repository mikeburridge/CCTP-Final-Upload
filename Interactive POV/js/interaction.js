
//Michael Burridge
//16013497
//Creative Technologies Project

//Various variables
var videoHalfWay = 0;
var formattedHalfWay = 0;
// Choice parts
var choicePart = "9" //Format of the time in the interactive piece, was originally formatted as 0:00 but found it worked better as 7
var bmxChoicePart = 11; //Skips to .. seconds
var mtbChoicePart = 98; //Skips to .. seconds
var previousChoiceChosen = false; //Stops choice not chosen playing
var trailChoice = "5"
var bigDipperTrail = 200;
var skillsParkTrail = 220;
//Question variables
var question1Asked = false; //Stops previous question being repeated

var video1;

$(document).ready(function(){

	$.featherlight.defaults.afterClose = playPauseVideo; /* When the info pop up is closed, the video will resume without the user needing to click the play button again. */

	video1 = $('#video1');

	$('.box1').on('click', function(){ /* Click event for information pop up */
		playPauseVideo('.InfoPopUp'); //when info button is clicked and the information is being displayed, the video will pause automatically and resume once the info box has been closed.
});


$('.box2').on('click', function(){ /* Click event for information pop up 2 */
	playPauseVideo('.InfoPopUp2') //when info button is clicked and the information is being displayed, the video will pause automatically and resume once the info box has been closed.
});

$('.bmxChoice').on('click',function(){ //bmx choice button
	bmxChoiceChosen = true;
	$.featherlight.close();
	video1[0].currentTime = bmxChoicePart; //when button is clicked, it will go to the stated start point in the video which is declared on (line 7)
})

$('.mtbChoice').on('click',function(){ //mountain bike choice button
	$.featherlight.close();
	video1[0].currentTime = mtbChoicePart; //when button is clicked, it will go to the stated start point in the video which is declared on (line 8)
})

$('.bigDipper').on('click',function(){ //big dipper choice button
	trailChoiceChosen = true;
	$.featherlight.close();
	video1[0].currentTime = bigDipperTrail; //when button is clicked, it will go to the stated start point in the video which is declared on (line 7)
})

$('.skillsPark').on('click',function(){ //Skills park choice button
	$.featherlight.close();
	video1[0].currentTime = skillsParkTrail; //when button is clicked, it will go to the stated start point in the video which is declared on (line 7)
})

$(video1).on('loadeddata',function(){
	videoHalfWay = Math.round(this.duration/2);
})

$(video1).on('timeupdate', function(){
	var currentTime = Math.round(this.currentTime);
	var durationNum = Math.round(this.duration);


	if(currentTime == choicePart && question1Asked == false){
		question1Asked = true;
		video1[0].pause();
	$.featherlight($('.popUpScenario1'))
}

if(currentTime == trailChoice && scenario2Asked == false){
	scenario2Asked = true;
	video1[0].pause();
$.featherlight($('.popUpScenario2'))
}
if(currentTime == trailChoice && previousChoiceChosen == true){
	video1[0].push();
}

if(currentTime == mtbChoicePart && previousChoiceChosen == true){ //This stops the video from playing the video in another pathway, for example if the BMX video was clicked, the code will stop the MTB video being played.
	video1[0].pause();
}

if(currentTime == videoHalfWay){
	//Halfway point
}

if(currentTime == durationNum){
	//Video completes
}

});

});

function playPauseVideo(popUp){ //This function stops the video playing when the info pop up is being displayed, once the box is closed the video will resume
	if(video1[0].paused){
		video1[0].play();
	} else{
		video1[0].pause();
		$.featherlight($(popUp));
	}
}
