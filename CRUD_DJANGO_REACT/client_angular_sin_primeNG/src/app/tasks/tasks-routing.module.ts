import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksCreateComponent } from './components/tasks-create/tasks-create.component';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component'

const routes: Routes = [ 

  { path: '', component: TasksListComponent },
  { path: 'create', component: TasksFormComponent, data: { name: 'TasksCreate' } },
  { path: 'edit/:id', component: TasksFormComponent, data: { name: 'TasksEdit' } },
  // { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  // { path: '**', redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
