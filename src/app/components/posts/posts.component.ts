import { Component, OnInit } from '@angular/core';
import {Post} from '../../Models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.posts = this.postService.getPostsHardcoded();
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
