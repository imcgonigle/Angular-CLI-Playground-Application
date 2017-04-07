import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  showNew: boolean = false;
  showSettings: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleExpand(option: string): void {
    this[option] = !this[option]
  }

}
