import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.scss']
})
export class UsersigninComponent {
  signInForm!: FormGroup;
  user:any;



  constructor(private dataservice : DataService,private fb : FormBuilder ,private http:HttpClient,private router :Router) { }

  ngOnInit(): void {
   this.formValidation
  }

  formValidation(){
    this.signInForm = this.fb.group({
      userName:['',[Validators.required,Validators.maxLength(40)]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
    });
  }

  submit() {
   //get usr data from db

    let validUser = this.user.find((ele: any) => {
      return this.signInForm.value.userName == ele.userName && this.signInForm.value.userPass == ele.userPass
    })

    if (validUser) {
      alert("Login successful");
      this.signInForm.reset();
      this.router.navigateByUrl('/user/usersucces')
    }
    else {
      alert("user not found")
      this.signInForm.reset();
      this.router.navigateByUrl('/user/usersignin')
    }
  }

}
