var obj = document.getElementById('arm1');
var obj1 = document.getElementById('arm2');
var obj3 = document.getElementById('mileage');
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var select = document.getElementById('selectid');
var panel = document.getElementById('panel');
var data = document.getElementById('data');
var benzin = document.getElementById("arm3");

var timers = [];

$('#start').click(function () {
    mileageIncrease();
    benzinArrow();
});

$('#stop').click(function () {
    mileageStop();
    offIndicator();
});

function mileageIncrease() {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    var strUser = select.options[select.selectedIndex].value;
    var i;
    var r = "R";
    if (typeof timers !== 'undefined' && timers.length > 0) {
        i = timers[timers.length - 1];
    } else {
        i = 1;
    }
    timers[i] = setInterval(function () {
        if (i === 1000) ;
        obj3.innerHTML = i + " miles";
        i++;
        timers[i];
    }, 1000);
    if (strUser === "1") {
        panel.innerHTML = '<h3>' + 1 + '</h3>';
        obj.style.transform = "translate(-85%, -50%) rotate(20deg)";
        obj1.style.transform = "translate(-85%, -50%) rotate(20deg)";
    } else if (strUser === "2") {
        panel.innerHTML = '<h3>' + 2 + '</h3>';
        obj.style.transform = "translate(-85%, -50%) rotate(50deg)";
        obj1.style.transform = "translate(-85%, -50%) rotate(30deg)";
    } else if (strUser === "3") {
        panel.innerHTML = '<h3>' + 3 + '</h3>';
        obj.style.transform = "translate(-85%, -50%) rotate(100deg)";
        obj1.style.transform = "translate(-85%, -50%) rotate(40deg)";
    } else if (strUser === "4") {
        panel.innerHTML = '<h3>' + 4 + '</h3>';
        obj.style.transform = "translate(-85%, -50%) rotate(150deg)";
        obj1.style.transform = "translate(-85%, -50%) rotate(50deg)";
    } else if (strUser === "5") {
        panel.innerHTML = '<h3></h3>' + 5 + '</h>';
        obj.style.transform = "translate(-85%, -50%) rotate(180deg)";
        obj1.style.transform = "translate(-85%, -50%) rotate(60deg)";
    } else if (strUser === "6") {
        panel.innerHTML = '<h3>' + 6 + '</h3>';
        obj.style.transform = "translate(-85%, -50%) rotate(214deg)";
        obj1.style.transform = "translate(-85%, -50%) rotate(80deg)";
    } else if (strUser === "R") {
        panel.innerHTML = '<h3>' + r + '</h3>';
    } else {

    }
}

function mileageStop() {
    buttonStart.disabled = false;
    buttonStop.disabled = true;

    for (var i = 0; i < timers.length; i++) clearInterval(timers[i]);
    obj.style.transform = "translate(-85%, -50%) rotate(-42deg)";
    obj1.style.transform = "translate(-85%, -50%) rotate(-42deg)";
}


$('#LIB').click(function (event) {
    event.preventDefault();
    $(".indicator-move-left").css("-webkit-animation-name", "run-left");
    onLeftIndicator();
});

$('#RIB').click(function (event) {
    event.preventDefault();
    $(".indicator-move-right").css("-webkit-animation-name", "run-right");
    onRightIndicator();
});

setInterval(function () {
    var today = new Date();
    data.innerHTML = today;
}, 1000);

function offIndicator() {
    $(".indicator-move-left").addClass('paused');
    $(".indicator-move-right").addClass('paused');
}

function onRightIndicator() {
    $(".indicator-move-right").removeClass('paused');
}

function onLeftIndicator() {
    $(".indicator-move-left").removeClass('paused');
}

function benzinArrow() {

    benzin.style.transform = "translate(-85%, -50%) rotate(20deg)";
}