const fmenu = document.querySelectorAll('[data-fmenu]');

const searchForm = "<input type='text' id='fmenu-search'>" + '<label for="fmenu-search"><i class="fa fa-search" name="q"></i></label>';

const loginForm = '<i class="fa fa-user"></i>' + '<form>' + '<input type="email" placeholder="email">' + '<input type="password" placeholder="password">' + '<button>Login</button>' + '</form>';

const siblings = n => [...n.parentElement.children].filter(c=>c!=n);

const isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

//get json data from the server
const readTextFile = function(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
};

export {fmenu, readTextFile, searchForm, loginForm, siblings, isObject};
