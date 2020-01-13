import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  public servicePosts(): Observable<JSON> {
    return this.http.get<JSON>(`https://jsonplaceholder.typicode.com/posts/`);
  }

  public servicePost(id:number): Observable<JSON> {
    return this.http.get<JSON>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  public serviceComments(id:number): Observable<JSON> {
    return this.http.get<JSON>(` https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
 
}
