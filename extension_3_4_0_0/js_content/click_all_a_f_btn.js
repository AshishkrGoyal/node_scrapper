var tmp="";

// for passing message to iframe
function passMessage(data) {
	var elem = document.getElementById("tff_frame");
	elem.contentWindow.postMessage(data, "*");
}

function enableSubmit() {
	var data = {};
	data.todo = "enable_submit";
	passMessage(data);
}

// function for disabling start clicking buttons
function disableSubmit() {
	var data = {};
	data.todo = "disable_submit";
	passMessage(data);
}

// final function for clicking
function startClickFinal(){
    var clicked=false;
    var buttons=document.getElementsByTagName("button");
    for(var counter=0; counter<buttons.length; counter++){
        var target=buttons[counter];
        var text=target.innerText.trim();
        if(text=="Add Friend"){
            target.click();
            target.focus();
            clicked=true;
            break;
        }
    }
    if(clicked){
        return true;
    }else{
        return false;
    }
}

function startClick(delay) {
    disableSubmit();
	if(startClickFinal()){
        tmp='"Add Friend" button is clicked.';
        toastr.success(tmp);
        // some button found and it is clicked
        setTimeout(function(){
            startClick(delay);
        }, delay);
    }else{
        // no button found it is not clicked
        tmp='No "Add Friend" buttons found for clicking.';
        toastr.error(tmp);
        alert(tmp);
        enableSubmit();
    }
}

// for removing invisible add friend buttons from screen
function removeUnnecessary(){
    $("#fbRequestsFlyout").remove();
    $("#fbRequestsJewel").remove();
}

//for clicking button
// eslint-disable-next-line no-unused-vars
function clickNow(delayStr) {
    removeUnnecessary();
    console.log("delayStr = "+delayStr);
    var delay=parseInt(delayStr) *1000||1000;
	startClick(delay);
	// for clicking add friend buttons on group member sections
	// click_all_add_friend_buttons_2();
}