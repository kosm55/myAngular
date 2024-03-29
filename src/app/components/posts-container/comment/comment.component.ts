import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

import {IComment} from "../../../interfaces";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input()
  comments: IComment[]

}
