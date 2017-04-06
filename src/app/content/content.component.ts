import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MdDialogComponent } from '../md-dialog/md-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  selection: string = "";

  constructor(public dialog: MdDialog) { }

  launchDialog() {
    let dialogRef = this.dialog.open(MdDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selection = result;
    })
  }

  ngOnInit() {
  }

}