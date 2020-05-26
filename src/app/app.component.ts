import { PostService } from './services/post-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mon-blog-angular-ocr';
  postsData: any[];

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postsData = this.postService.posts;
  }
}
