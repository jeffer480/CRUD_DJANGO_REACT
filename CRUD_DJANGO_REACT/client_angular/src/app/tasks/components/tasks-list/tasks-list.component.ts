import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { TasksModel } from '../../tasks-models';
import { ToastService } from '../../../toast.service'; // Importa el ToastService

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  tasks: TasksModel[] = [];

  constructor(
    private tasksService: TasksService,
    private toastService: ToastService // Inyecta el ToastService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    // this.tasksService.getTasks().subscribe(tasks => this.tasks = tasks); 
    this.tasksService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  // eliminar task
  deleteTask(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      this.tasksService.deleteTask(id).subscribe({
        next: () => {
          // console.log('Tarea eliminada');
          this.toastService.showError('Tarea eliminada', 'La tarea ha sido eliminada con éxito.');
          this.getTasks(); // Recargar la lista de tareas después de eliminar una
        },
        error: error => {
          console.error('Error al eliminar la tarea:', error);
        }
      });
    }
  }

}
