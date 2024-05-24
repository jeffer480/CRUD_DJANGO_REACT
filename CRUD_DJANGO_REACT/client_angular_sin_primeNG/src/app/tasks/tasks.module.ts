import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TasksCreateComponent } from './components/tasks-create/tasks-create.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';



@NgModule({
  declarations: [
    TasksCreateComponent,
    TasksListComponent,
    TasksFormComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TasksModule { }
