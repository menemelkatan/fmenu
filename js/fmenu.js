var fmenu = document.querySelectorAll('[data-fmenu]');

var searchForm = "<input type='text' id='fmenu-search'>" + '<label for="fmenu-search"><i class="fa fa-search" name="q"></i></label>';



window.onresize= function() {
  console.log(window.innerWidth)
}

window.onload = function() {

  for(var i = 0; i < fmenu.length; i++){
    var qqq = document.createElement('button');
    qqq.className = 'fmenu-btn';
    qqq.innerHTML = "<i class='fa fa-bars'></i>";
    fmenu[i].appendChild(qqq);
  }


  fmenu.forEach(function(el) {
    el.classList.add('fmenu');

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

    el.lastElementChild.onclick = function() {
      el.classList.toggle('fmenu-show');
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
    })
  })
}
