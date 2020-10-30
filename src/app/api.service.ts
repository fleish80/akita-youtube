import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo.model';
import {map} from 'rxjs/operators';

const baseUrl = 'https://api-todo-flutter.herokuapp.com/tasks';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  addTask(title: string, description: string): Observable<Todo> {
    return this.http.post<Todo>(baseUrl, {title, description});
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<{ data: Todo[] }>(baseUrl)
      .pipe(map((res) => res.data));
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${baseUrl}/${id}`);
  }

  updateTodo(id: string, changes: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${baseUrl}/${id}`, changes);
  }
}
