import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../../../services";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  form: FormGroup
  error: boolean

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
        this._initForm()
    }

  private _initForm(): void{
    this.form=this.fb.group({
      username:[''],
      password: ['']
    })
  }
  register() {
    this.authService.register(this.form.value).subscribe({
      next: ()=>{
        this.router.navigate(['/login'])
        this.error=false
      },
      error: ()=>{
        this.error=true
      }
    })
  }
}
