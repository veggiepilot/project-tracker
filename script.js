
var clock  = $("#clock");
var addBtn = $("#add-button");
var projectNameInput = $('[name="project-name"]');
var projectTypeSelect = $('[name="project-type"]');
var hourlyRateInput = $('[name="hourly-rate"]');
var dueDateInput = $('[name="due-date"]');
var tbody = $('tbody');
var modal = $('#exampleModal');



function updateClock() {
    var now = moment().format("MMM DD, YYYY - H:mm:ss a");
    clock.text(now);
}
function addProject() {
    // Get values from inputs
    var name = projectNameInput.val(); 
    var type = projectTypeSelect.val();
    var rate = hourlyRateInput.val(); 
    var due = dueDateInput.val();
    // Craete new table row
    // Create td elements
    // Append tds into row
    var row = $('<tr>')
        .append('<td>' + name + '</td>')
        .append('<td>' + type + '</td>')
        .append('<td>' + rate + '</td>')
        .append('<td>' + due + '</td>')
        .append('<td>?????</td>')
    // Append new row into DOM
    tbody.append(row);
    // Close the modal
    modal.modal('hide');
}

addBtn.on('click', addProject)

setInterval(updateClock, 1000);
updateClock();