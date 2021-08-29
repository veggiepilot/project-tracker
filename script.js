
var clock = $("#clock");

function updateClock() {
    var now = moment().format("MMM DD, YYYY - H:mm:ss a");
    clock.text(now);
}

setInterval(updateClock, 1000);
updateClock();