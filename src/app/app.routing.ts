import {Routes, RouterModule} from '@angular/router';

import {TaskComponent} from './task/task.component';
import {TaskAddComponent} from './task-add/task-add.component';



const appRoutes: Routes  = [
    {path:'list',component: TaskAddComponent},
    {path:'add',component:TaskComponent},
    {path:'',redirectTo:'/list',pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);