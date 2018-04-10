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
function singleClickFinal(){
    var clicked=false;
    var buttons=document.getElementsByTagName('a');
    for(var counter=0; counter<buttons.length; counter++){
        var target=buttons[counter];
        var text=target.innerText.trim();
        if(text=="Poke"||text=="Poke back"){
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

function clicAll(delay) {
    disableSubmit();
	if(singleClickFinal()){
        // some button found and it is clicked
        setTimeout(function(){
            clicAll(delay);
        }, delay);
        tmp='"Poke" button is clicked.';
        toastr.success(tmp);
    }else{
        // no button found it is not clicked
        tmp='No "Poke" buttons found for clicking.';
        toastr.error(tmp);
        alert(tmp);
        enableSubmit();
    }
}


//for clicking button
// eslint-disable-next-line no-unused-vars
function clickPoke(delayStr) {
    var delay=parseInt(delayStr) * 1000 || 1000;
	clicAll(delay);
}

/*
old
var all_clicked = "All poke buttons are clicked.";
var pokeButtonClass = "sp_-wv_-QYdyBY";

function clickAllPokeButtons() {
	for (var counter = 0; document.getElementsByClassName(pokeButtonClass)[counter]; counter++) {
		if (document.getElementsByClassName(pokeButtonClass)[counter].innerText == "") {
			document.getElementsByClassName(pokeButtonClass)[counter].click();
		}
	}
	for (counter = 0; document.getElementsByTagName("a")[counter]; counter++) {
		if (document.getElementsByTagName("a")[counter].innerText == "Poke") {
			document.getElementsByTagName("a")[counter].click();
		}
	}
	for (counter = 0; document.getElementsByTagName("a")[counter]; counter++) {
		if (document.getElementsByTagName("a")[counter].innerText == "Poke Back") {
			document.getElementsByTagName("a")[counter].click();
		}
	}
	toastr.success(all_clicked);
}

*/