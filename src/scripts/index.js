'use strict';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import {fmenu} from './modules/fmenuVariables';
import {fmenuToggleInitialize, fmenuToggle, fmenuToggleVertical, fmenuToggleLogin} from './modules/fmenuToggle';
import {fmenuLogo, fmenuSocial, fmenuSearch, fmenuLogin} from './modules/fmenuFeatures';
import {fmenuJson} from './modules/fmenuJson';
import '../styles/fmenu.scss';

function fmenuRun () {

  fmenuToggleInitialize();

  fmenu.forEach(function(el) {

    //social icons
    fmenuSocial(el);

    // add the logo
    fmenuLogo(el);

    //add search
    fmenuSearch(el);

    //add login
    fmenuLogin(el);

    //vertical menu
    fmenuToggleVertical(el);

    // expand menu
    fmenuToggle(el);

    // expand login box
    fmenuToggleLogin(el);

    //get data from json
    fmenuJson(el);
  });

}

fmenuRun();
