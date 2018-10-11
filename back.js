
var count=0;
var clickButton = document.getElementById("clickButton");
var runInterval;

function triggerEvent(){
	
	$(document).ready(function() {
	
	runInterval = setInterval(()=>{
		
			var curButton = $(document).find('button');
			$(curButton[4]).trigger("click");
			count++;	
			console.log(curButton)
		},300);
		//2 = left
		//4 = right
		//3 = up
	});
	

}

chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        if( request.message === "false" ) {
			triggerEvent();
		}else if(request.message === "true" ){
			clearInterval(runInterval);
		}
      }
    );


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
		console.log("Left Click Count:"+count)
    }
    else if (e.keyCode == '39') {
       // right arrow
		console.log("right Click Count:"+count)
    }

}