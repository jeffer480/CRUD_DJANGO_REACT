import { Component } from '@angular/core';
import { TasksModel } from '../../tasks-models';
import { TasksService } from '../../tasks.service'

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrl: './tasks-create.component.scss'
})
export class TasksCreateComponent {
  newTask: TasksModel = {
    title: '',
    description: '',
    done: false
  };

  constructor(private tasksService: TasksService) { }

  addTask(): void {
    this.tasksService.createTask(this.newTask)
      .subscribe(() => {
        console.log('Task added successfully');
        // Reiniciamos el objeto newTask para vaciar el formulario
        this.newTask = {
          title: '',
          description: '',
          done: false
        };
        // Aquí podrías realizar acciones adicionales después de agregar el mensaje, como redirigir a otra página o actualizar la lista de mensajes
      });
  }

  ngOnInit(): void {
  }
}
