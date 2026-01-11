import { Component } from '@angular/core';
import { Repaso1Service } from '../services/repaso1-service';
import { Observable } from 'rxjs';
import { Posts } from '../model/Posts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {

  constructor(private service:Repaso1Service) { }
  posts$: Observable<Posts[]>;


  cargarPosts() {
    this.posts$ = this.service.getPosts();
  }

}
