import { Post } from './../interfaces/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  loveBtn = 'Love It';
  dontLoveBtn = 'Dont Love It';
  myCondition: string;

  constructor() { }

  ngOnInit(): void {
  }

  onLoveIt(){
    if (this.post != null){
      this.post.loveIts++;
    }
  }

  onDontLoveIt(){
    if (this.post != null){
      this.post.loveIts--;
    }
  }
}
