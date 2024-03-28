import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import {UserComponent} from "../user/user.component";
import {NgForOf, NgIf} from "@angular/common";
import {PostsComponent} from "../posts/posts.component";
import {IPost} from "../../interfaces/post.interface";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    PostsComponent,
    NgIf,
    PostComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: IUser[]
  userId: number
  posts: IPost[]

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
       this.userService.getAll().subscribe(value => this.users=value)
    }

  getUserIdEvent(id: number) {
    this.userId=id
    this.userService.getPosts(this.userId).subscribe(value =>this.posts=value)
  }
}
