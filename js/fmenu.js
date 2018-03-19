var fmenu = document.querySelectorAll('[data-fmenu]');

window.onload = function() {

  for(var i = 0; i < fmenu.length; i++){
    var qqq = document.createElement('button');
    qqq.className = 'fmenu-btn';
    qqq.innerHTML = "<i class='fa fa-bars'></i>";
    fmenu[i].appendChild(qqq);
  }



  fmenu.forEach(function(el) {
    el.classList.add('fmenu');

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
