import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TasksCreateComponent } from './components/tasks-create/tasks-create.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';

//primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';


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
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    RouterModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    CheckboxModule,
    InputTextareaModule,
  ]
})
export class TasksModule { }
