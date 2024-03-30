import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

import {IComment, IPost} from "../../../interfaces";
import {PostService} from "../../../services/post.service";
import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommentComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent{
  post: IPost
  comments: IComment[]

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private postService:PostService
  ) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.post=this.router.getCurrentNavigation()?.extras.state as IPost

      if (!this.post){
        this.postService.getById(id).subscribe(value => this.post=value)
      }

      this.postService.getCommentOfPost(id).subscribe(value => this.comments=value)

    })
  }

}
