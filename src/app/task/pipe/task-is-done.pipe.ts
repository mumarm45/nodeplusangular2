import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../Task';

@Pipe({
  name: 'taskIsDone'
})
export class TaskIsDonePipe implements PipeTransform {

  transform(lst,val) { 
    return lst.filter(tsk => tsk.isDone==val);
  }

}
