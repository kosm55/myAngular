import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment, IPost} from "../../../interfaces";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  comments: IComment[]
  @Input()
  post: IPost

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) {}

  getComments() {
    this.router.navigate([this.post.id],{
      relativeTo: this.activatedRoute,
      state: this.post
    })

  }
}
