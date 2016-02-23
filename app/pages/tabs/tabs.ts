import {Page} from 'ionic-framework/ionic';

import {Scoring} from '../scoring/scoring';
import {TeamA} from '../teamA/teamA';
import {TeamB} from '../teamB/teamB';
// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: Type = Scoring;
  tab2Root: Type = TeamA;
  tab3Root: Type = TeamB;

  constructor() {

  }
}
