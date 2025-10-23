import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/services/api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {

  posts!:any;
  constructor(private postsService : ApiService){

  }
  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next:(res)=>{
        this.posts=res
      },
      error:(err)=>{
        console.log("error")
      },
      complete:()=>{
        console.log("sucess")
      }
    })
  }
 

}

 