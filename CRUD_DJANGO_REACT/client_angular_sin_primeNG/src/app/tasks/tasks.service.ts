import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TasksModel } from './tasks-models';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = 'http://localhost:8000/tasks/api/v1/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TasksModel[]> {
    return this.http.get<TasksModel[]>(this.apiUrl);
  }

  getTask(id: number): Observable<TasksModel> { 
    const url = `${this.apiUrl}/${id}/`;
    return this.http.get<TasksModel>(url);
  }

  createTask(task: TasksModel): Observable<TasksModel> {
    return this.http.post<TasksModel>(`${this.apiUrl}/`, task);
  }

  updateTask(id: number, updates: Partial<TasksModel>): Observable<TasksModel> {
    const url = `${this.apiUrl}/${id}/`;
    return this.http.patch<TasksModel>(url, updates);
  }

  deleteTask(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/`;
    return this.http.delete<any>(url);
  }
}
