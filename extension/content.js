console.log("content script load.........................");



initDiv();

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.msg =='calibration')
        calibration();
    if(message.msg=='heatMap')
    heatMap();
});

function calibration(){
    console.log("start calibration");
    WebGazeSetup();
    Restart();
}

function heatMap(){
    console.log("start heatMap");
    showHeatMap();
}

function initDiv(){
    canvas = document.createElement( 'canvas' );
    canvas.id = 'plotting_canvas';
    canvas.style = "cursor:crosshair;position: fixed;"

    heatcanvas = document.createElement( 'canvas' );
    heatcanvas.id = 'heat_canvas';
    heatcanvas.width = window.innerWidth;
    heatcanvas.height = window.innerHeight;
    heatcanvas.style.position = "fixed";

    document.body.appendChild( canvas );
    document.body.insertBefore( heatcanvas ,document.body.firstChild );

    div = document.createElement( 'div' );
    div.className = 'calibrationDiv';
    div.style.position = "fixed";
    // div.style.zIndex = 2147483647;

    for (var i = 1; i < 10; i++){
        point = document.createElement( 'button' );
        point.className = "Calibration";
        point.id = "Pt"+i;
        div.appendChild(point);
    }
	document.body.appendChild( div );
}

var gazeData = [];
var gazePositionTime = [];

function updateGazeDate(point){
    if(point){
        var gazePoint = [point.x,point.y,1];
        gazeData.push(gazePoint);

        var curTime =  moment().valueOf();
        var positionTime  = {'x':point.x,
                            'y':point.y,
                            'time':curTime};
        gazePositionTime.push(positionTime); 
    }
}

function showHeatMap() {
    simpleheat('heat_canvas').data(gazeData).draw()
};