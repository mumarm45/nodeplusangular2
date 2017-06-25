import { Component, OnInit } from '@angular/core';
import {TaskService} from './task.service';
import {TaskIsDonePipe} from './task-is-done.pipe';
import * as _ from 'lodash';
import {MdDialog, MdDialogRef} from '@angular/material';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
checked = false;
taskList = [];
title="";
  constructor(private taskService: TaskService, public mdDialog: MdDialog) { }

  ngOnInit() {
  //  this.title="fse";
   this.taskService.get().subscribe(res => {
    this.taskList = res;
   });
  }

  addNewTask(newValue) {
    if (newValue) {
 const task  = { title: newValue, isDone: false};
this.taskService.create(task).subscribe( res => {
this.taskList.push(task);
this.title = '';
});
    }
  }

  removeTask(id){
     let dilog = this.mdDialog.open(DeleteDialogComponent);
     dilog.afterClosed().subscribe(res => {
         console.log(res);
         if(res){
           this.taskService.remove(id).subscribe(res => {
      const idx = _.findIndex(this.taskList, { _id: id});
      _.remove(this.taskList, tsk => tsk._id == id);
     // this.taskList.slice(idx, 1);
    })
         }
     });  
  }

}
