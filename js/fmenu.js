var fmenu = document.querySelectorAll('[data-fmenu]');

var searchForm = "<input type='text' id='fmenu-search'>" + '<label for="fmenu-search"><i class="fa fa-search" name="q"></i></label>';

var loginForm = '<i class="fa fa-user"></i>' + '<form>' + '<input type="email" placeholder="email">' + '<input type="password" placeholder="password">' + '<button>Login</button>' + '</form>';

var siblings = n => [...n.parentElement.children].filter(c=>c!=n)


function fmenuRun () {

  // initialize fmenu toggle button
  for(var i = 0; i < fmenu.length; i++){
    var qqq = document.createElement('button');
    qqq.className = 'fmenu-btn';
    qqq.innerHTML = "<i class='fa fa-bars'></i>";
    fmenu[i].appendChild(qqq);
  }

  fmenu.forEach(function(el) {
    el.classList.add('fmenu');

    //social icons
    if(el.hasAttribute('data-fmenu-social')){
      var socials = JSON.parse(el.getAttribute('data-fmenu-social'));
      var qqq = document.createElement('ol');

      qqq.className = 'fmenu-social';
      for(var social in socials) {
        console.log(social + ' => '+socials[social]);
        var aaa = document.createElement('a');
        var iii = document.createElement('i');
        iii.classList.add('fa');
        qqq.appendChild(aaa);
        aaa.setAttribute('href', socials[social]);
        aaa.appendChild(iii);
        iii.classList.add('fa-'+social+'');
      }
      el.insertBefore(qqq, el.children[1])
    }

    // add the logo
    if(el.hasAttribute('data-fmenu-logo')){
      var qqq = document.createElement('img');
      qqq.className = 'fmenu-logo';
      qqq.setAttribute('src', ''+el.getAttribute('data-fmenu-logo')+'');
      el.insertBefore(qqq, el.children[0])
    }

    //add search
    if(el.hasAttribute('data-fmenu-search')){
      var qqq = document.createElement('form');
      qqq.innerHTML = searchForm;
      qqq.className = 'fmenu-search';
      qqq.setAttribute('action', ''+el.getAttribute('data-fmenu-search')+'');
      el.insertBefore(qqq, el.lastElementChild)
    }

    //add search
    if(el.hasAttribute('data-fmenu-login')){
      var qqq = document.createElement('div');
      qqq.innerHTML = loginForm;
      qqq.className = 'fmenu-login';
      qqq.lastElementChild.setAttribute('action', ''+el.getAttribute('data-fmenu-login')+'');
      el.insertBefore(qqq, el.lastElementChild)
    }

    //vertical menu
    if(el.getAttribute('data-fmenu-vertical') === "true"){
      el.lastElementChild.onclick = function() {
        el.classList.toggle('hide-vertical');
      }
    }

    else{
      el.lastElementChild.onclick = function() {
        el.classList.toggle('fmenu-show');
      }
    }

    var ss = el.querySelectorAll('li');
    ss.forEach(function(ol) {
      if(ol.children.length > 1) {
        ol.classList.add('with-subfmenu');
        ol.children[1].classList.add('subfmenu');
        ol.children[0].onclick = function () {
          ol.children[1].classList.toggle('subfmenu-show');

        }
      }

    });

    var hh = el.querySelectorAll('.fmenu-login');
    hh.forEach(function(sl) {
      if(sl.children.length > 1) {
        sl.children[0].onclick = function () {
          sl.children[1].classList.toggle('subfmenu-show');
        }
      }
    })
  })

}

fmenuRun();
