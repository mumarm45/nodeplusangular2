import { Component, OnInit } from '@angular/core';
import {TaskService } from '../task/service/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
public doughnutChartLabels: string[] = ['Done Task', 'In-Progress Task'];
 public radarChartLabels:string[] = ['Done Task', 'In-Progress Task'];
public colors : string[] = ['blue','greem'];
  public doughnutChartData: number[] = [0,0];
  public doughnutChartType: string = 'doughnut';
  public pieChartType: string = 'pie';
  public taskList = [];
  public taskDone = []; 
  public taskNotDone= [];
  public lineChartType:string = 'line';
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  constructor(private taskService: TaskService) { }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  ngOnInit() {
    this.taskService.get().subscribe(res => {
    this.taskList = res;
   this.taskDone = this.taskList.filter(tsk => tsk.isDone);
   this.taskNotDone = this.taskList.filter(tsk => !tsk.isDone);
   this.doughnutChartData = [this.taskDone.length,this.taskNotDone.length];
   });
  }

}
