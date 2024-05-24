import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  items: any[];

  constructor() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-refresh',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus', routerLink: ['/'] },
          { label: 'Open', icon: 'pi pi-fw pi-download', routerLink: ['/'] },
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-search',
        items: [
          { label: 'Undo', icon: 'pi pi-fw pi-refresh', routerLink: ['/'] },
          { label: 'Redo', icon: 'pi pi-fw pi-repeat', routerLink: ['/'] }
        ]
      },
      {
        label: 'Tareas',
        icon: 'pi pi-fw pi-file',
        items: [
          { label: 'Listado de tareas', icon: 'pi pi-list-check', routerLink: ['/tasks'] },
          { label: 'Crear tarea', icon: 'pi pi-fw pi-search', routerLink: ['/tasks/create'] }
        ]
      }
    ];
  }
}
