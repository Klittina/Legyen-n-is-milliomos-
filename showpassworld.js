function pontbolszoveg() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function pontbolszoveg2() {
    var x = document.getElementById("pwdpwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


function bejelentkezes() {
    alert("Sikeresen bejelentkeztél!");
}

function kijelentkeztel() {
    alert("Sikeresen kijelentkeztél!");
}
$(document).ready(function() {
    $("table").tablesorter();
});