import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../../interface/iposts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  posts:any;
  constructor(private httpClient : HttpClient){

  }

  getPosts():Observable<IPosts[]>{

    return this.httpClient.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts')
  }
  
}