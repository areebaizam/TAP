import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'tap-home',
  imports:[NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'TAP';

  constructor() { }

  ngOnInit(): void {
  }

}
