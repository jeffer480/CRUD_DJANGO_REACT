import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../tasks.service';
import { TasksModel } from '../../tasks-models';
import { ToastService } from '../../../toast.service'; // Importa el ToastService


@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss'],
})
export class TasksFormComponent {

  taskId?: number;
  task: Partial<TasksModel> = {}; // Cambiado a Partial para permitir tareas sin `id`
  isUpdateMode = false; // Indica si el componente está en modo de actualización

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tasksService: TasksService,
    private toastService: ToastService // Inyecta el ToastService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      if (this.taskId) {
        this.isUpdateMode = true;
        this.getTask(this.taskId);
      }
    });
  }

  getTask(id: number): void {
    this.tasksService.getTask(id).subscribe({
      next: task => {
        this.task = task;
      },
      error: error => {
        console.error('Error al obtener la tarea:', error);
      }
    });
  }

  submitForm(): void {
    if (this.isUpdateMode) {
      this.updateTask();
    } else {
      this.createTask();
    }
  }

  createTask(): void {
    this.tasksService.createTask(this.task as TasksModel).subscribe({
      next: newTask => {
        // console.log('Nueva tarea creada:', newTask);
        // this.router.navigate(['/tasks', newTask.id]);
        this.toastService.showSuccess('Tarea creada', 'La tarea ha sido creada con éxito.');
        this.router.navigate(['/tasks']);
      },
      error: error => {
        this.toastService.showError('Error', 'Ha ocurrido un error al crear la tarea.');
        console.error('Error al crear tarea:', error);
      }
    });
  }

  updateTask(): void {
    this.tasksService.updateTask(this.taskId!, this.task as TasksModel).subscribe({
      next: updatedTask => {
        // console.log('Tarea actualizada:', updatedTask);
        // this.router.navigate(['/tasks', this.taskId]);
        this.toastService.showSuccess('Tarea actualizada', 'La tarea ha sido actualizada con éxito.');
        this.router.navigate(['/tasks']);
      },
      error: error => {
        this.toastService.showError('Error', 'Ha ocurrido un error al actualizar la tarea.');
        console.error('Error al actualizar tarea:', error);
      }
    });
  }

}
