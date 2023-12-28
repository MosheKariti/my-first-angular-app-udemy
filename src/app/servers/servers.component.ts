import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /// select by attributes and then use in html like that: <div app-servers></div>:
  // selector: ['app-servers'],
  /// select by css class and then use in html like that: <div class="app-servers"></div>:
  // selector: '.app-servers',
  template:`
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  constructor() { }

  ngOnInit() {

  }

}
