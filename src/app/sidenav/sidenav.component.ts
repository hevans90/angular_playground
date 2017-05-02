import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  constructor() { }
  @Input() title : string;

  public menuItems: Array<string> = ['Home', 'Dashboard', 'FileDrop'];

  ngOnInit() {
  }

}