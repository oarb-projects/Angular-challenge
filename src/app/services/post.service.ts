import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../Models/Post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }
  postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';

  // getTodos(): Observable<Todo[]>{
  //   return this.http.get<Todo[]>(this.todosUrl);
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPostsHardcoded(){
    return [
      {
        userId: 1,
        id: 1,
        title: 'Post One',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        userId: 2,
        id: 2,
        title: 'Post two',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        userId: 3,
        id: 3,
        title: 'Post three',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }
    ];
  }
}
