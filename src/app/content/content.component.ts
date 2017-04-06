import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  launchDialog() {
    console.log("launching dialog")
    // TODO: write function that actually launches the dialog
  }

  ngOnInit() {
  }

}
