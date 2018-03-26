import {readTextFile, isObject} from './fmenuVariables';

// get data from a json file
const fmenuJson = function(element) {
  if(element.hasAttribute('data-fmenu-json')){
    var qq = document.createElement('ul');
    readTextFile(element.getAttribute('data-fmenu-json'), function(text){
        var fmenuItems = JSON.parse(text);
        for(var item in fmenuItems) {

          if (isObject(fmenuItems[item])) {
            var qqq = document.createElement('ul');
            qqq.classList.add('subfmenu');
            for(var subItem in fmenuItems[item]) {
              var lll = document.createElement('li');
              var aaa = document.createElement('a');
              lll.appendChild(aaa);
              aaa.setAttribute('href', fmenuItems[item][subItem]);
              qqq.appendChild(lll);
              aaa.innerHTML = subItem;
            }

            var vl = document.createElement('li');
            var va = document.createElement('a');
            va.setAttribute('href', '#!');
            va.innerHTML = item;
            vl.classList.add('with-subfmenu');
            vl.onclick = function () {
              qqq.classList.toggle('subfmenu-show');

            };
            vl.appendChild(va);
            vl.appendChild(qqq);
            qq.appendChild(vl);
          }

          else {
            var ll = document.createElement('li');
            var aa = document.createElement('a');
            ll.appendChild(aa);
            aa.setAttribute('href', fmenuItems[item]);
            qq.appendChild(ll);
            aa.innerHTML = item;
          }
        }
    });

    element.appendChild(qq);
  }
};

export {fmenuJson};
