import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TaskService {
private  url = 'http://localhost:3000/api/tasks';
  constructor(private http: Http) { }

   get() {
    return  this.http.get(this.url).map(response => {
     return response.json();
     });
   }
   create(task) {
    return this.http.post(this.url, task).map(res => {
       return res.json();
     });
   }
   remove(id) {
     return this.http.delete(`${this.url}/${id}`).map(res => {
            return res.json();
     });
   }
   update(id, data) {
     return this.http.put(`${this.url}/${id}`, data).map(res => {
           return res.json();
     });
   }

}
