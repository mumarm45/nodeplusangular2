import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {routing} from './app.routing';
import { TaskAddComponent } from './task-add/task-add.component';
import { MdTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {hammerjs  } from 'hammerjs';
import {MdSidenavModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdSlideToggleModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import {TaskService} from './task/service/task.service';
import { TaskIsDonePipe } from './task/pipe/task-is-done.pipe';
import {MdIconModule, MdDialogModule, MdCardModule, MdTooltipModule, MdSnackBarModule} from '@angular/material';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskAddComponent,
    AppSidebarComponent,
    TaskIsDonePipe,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FlexLayoutModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdListModule,
    MdSlideToggleModule,
    MdIconModule,
    MdToolbarModule, MdDialogModule, Ng2DragDropModule, MdCardModule, MdTooltipModule, MdSnackBarModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
 entryComponents: [DeleteDialogComponent]
})
export class AppModule { }
