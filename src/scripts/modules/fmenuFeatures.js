import {searchForm, loginForm} from './fmenuVariables';

// add the logo
const fmenuLogo = function(element) {
  if(element.hasAttribute('data-fmenu-logo')){
    var qqq = document.createElement('img');
    qqq.className = 'fmenu-logo';
    qqq.setAttribute('src', ''+element.getAttribute('data-fmenu-logo')+'');
    element.insertBefore(qqq, element.children[0]);
  }
};

// add the social icons
const fmenuSocial = function(element) {
  if(element.hasAttribute('data-fmenu-social')){
    var socials = JSON.parse(element.getAttribute('data-fmenu-social'));
    var qqq = document.createElement('ol');

    qqq.className = 'fmenu-social';
    for(var social in socials) {
      var aaa = document.createElement('a');
      var iii = document.createElement('i');
      iii.classList.add('fa');
      qqq.appendChild(aaa);
      aaa.setAttribute('href', socials[social]);
      aaa.appendChild(iii);
      iii.classList.add('fa-'+social+'');
    }
    element.querySelectorAll('.fmenu-tools')[0].appendChild(qqq);
  }
};

// add the search
const fmenuSearch = function(element) {
  if(element.hasAttribute('data-fmenu-search')){
    var qqq = document.createElement('form');
    qqq.innerHTML = searchForm;
    qqq.className = 'fmenu-search';
    qqq.setAttribute('action', ''+element.getAttribute('data-fmenu-search')+'');
    element.querySelectorAll('.fmenu-tools')[0].appendChild(qqq);
  }
};

// add the login
const fmenuLogin = function(element) {
  if(element.hasAttribute('data-fmenu-login')){
    var qqq = document.createElement('div');
    qqq.innerHTML = loginForm;
    qqq.className = 'fmenu-login';
    qqq.lastElementChild.setAttribute('action', ''+element.getAttribute('data-fmenu-login')+'');
    element.querySelectorAll('.fmenu-tools')[0].appendChild(qqq);
  }
};

export {fmenuLogo, fmenuSocial, fmenuSearch, fmenuLogin};
