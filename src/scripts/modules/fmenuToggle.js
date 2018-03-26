import {fmenu, readTextFile, searchForm, loginForm, siblings, isObject} from './fmenuVariables';

// initialize fmenu toggle button
const fmenuToggleInitialize = function() {
  for(var i = 0; i < fmenu.length; i++){
    var qqq = document.createElement('button');
    qqq.className = 'fmenu-btn';
    qqq.innerHTML = "<i class='fa fa-bars'></i>";
    fmenu[i].appendChild(qqq);
  }
};


// expand fmenu
const fmenuToggle = function(element) {
  var ss = element.querySelectorAll('li');
  ss.forEach(function(ol) {
    if(ol.children.length > 1) {
      ol.classList.add('with-subfmenu');
      ol.children[1].classList.add('subfmenu');
      ol.children[0].onclick = function () {
        ol.children[1].classList.toggle('subfmenu-show');

      };
    }
  });
};

// expand fmenu vertical
const fmenuToggleVertical = function(element) {
  if(element.getAttribute('data-fmenu-vertical') === "true"){
    element.lastElementChild.onclick = function() {
      element.classList.toggle('hide-vertical');
    };
  }

  else{
    element.lastElementChild.addEventListener('click', function() {
      element.classList.toggle('fmenu-show');
    });
  }
};


// expand fmenu login box
const fmenuToggleLogin = function(element) {
  var hh = element.querySelectorAll('.fmenu-login');
  hh.forEach(function(sl) {
    if(sl.children.length > 1) {
      sl.children[0].onclick = function () {
        sl.children[1].classList.toggle('subfmenu-show');
      };
    }
  });
};

export {fmenuToggleInitialize, fmenuToggle, fmenuToggleVertical, fmenuToggleLogin};
