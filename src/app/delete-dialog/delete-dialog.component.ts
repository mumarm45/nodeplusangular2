import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
title = "Are you sure?";
message = "You want to delete";
  constructor(public dialogRef: MdDialogRef<DeleteDialogComponent>) { }

  ngOnInit() {
    console.log(this.dialogRef);
  }

}
