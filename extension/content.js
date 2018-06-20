console.log("content load.........................");



initDiv();

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.msg =='calibration')
        calibration();
    if(message.msg=='trace')
        trace();
});

function calibration(){
    console.log("start calibration");
    WebGazeSetup();
}

function trace(){
    console.log("start trace");
}

function initDiv(){
    canvas = document.createElement( 'canvas' );
    canvas.id = 'plotting_canvas';
    canvas.width = "500";
    canvas.height = "500";
    canvas.style = "cursor:crosshair;"

    document.body.appendChild( canvas );

    div = document.createElement( 'div' );
    div.className = 'calibrationDiv';
    for (var i = 1; i < 10; i++){
        point = document.createElement( 'button' );
        point.className = "Calibration";
        point.id = "Pt"+i;
        div.appendChild(point);
    }
	document.body.appendChild( div );
}