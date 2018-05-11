import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MonatsanzeigePage } from '../monatsanzeige/monatsanzeige';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MonatsanzeigePage;

  constructor() {

  }
}
