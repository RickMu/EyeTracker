console.log("content script load.........................");



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
    Restart();
}

function trace(){
    console.log("start trace");
}

function initDiv(){
    canvas = document.createElement( 'canvas' );
    canvas.id = 'plotting_canvas';
    canvas.width = "500";
    canvas.height = "500";
    canvas.style = "cursor:crosshair;position: fixed;"

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

// var gazeData = [];
// var heat = simpleheat('canvas').data(gazeData).max(18), frame;


// function updateGazeDate(evt, point){
//     var gazePoint = [point.x,point.y,1];
//     gazeData.push(gazePoint);

//     var curTime =  moment().valueOf();
//     var positionTime  = {'x':point.x,
//                          'y':point.y,
//                          'time':curTime};
//     gazePositionTime.push(positionTime); 
// }