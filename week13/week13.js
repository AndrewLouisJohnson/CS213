// Initial setup function
$(document).ready(function () {
    // Select all numbers and operators using their class selector, then
    // bind a click event listener to each of them.
    $(".digit, .operator").each(function () {
        $(this).click(function () {
            buildEquasion($(this).val());
        });
    });

    // Select the equals and clear buttons using their ID selectors.
    $("#equals").click(evaluateEquasion);

    $("#C").click(function () {
        equasion = "";
        $("#display").val(equasion);
    });
});

// Build a valid equasion to be evaluated.
var buildEquasion = function(next) {
    if (!isNaN(next)) {
        equasion += next;
    }
    if (equasion === "") {
        return;
    }
    if (!isNaN(equasion.slice(-1)) && isNaN(next)) {
        equasion += next;
    }
    $("#display").val(equasion);
};

var evaluateEquasion = function () {
    if (!isNaN(equasion.slice(-1))) {
        equasion = eval(equasion).toString();
    }
    $("#display").val(equasion);
}

var equasion = "";
