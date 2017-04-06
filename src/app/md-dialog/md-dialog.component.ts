import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-md-dialog',
  templateUrl: './md-dialog.component.html',
  styleUrls: ['./md-dialog.component.scss']
})
export class MdDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<MdDialogComponent>) {}

  ngOnInit() {
  }

}
