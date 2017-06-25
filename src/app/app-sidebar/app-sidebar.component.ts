import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {
  @Input() checked;
  constructor() { }

  ngOnInit() {
  }

}
