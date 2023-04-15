import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  signUpForm!:FormGroup;

  constructor(private fb:FormBuilder, private dataservice : DataService,
    private router : Router) { }

  ngOnInit(): void {
    this.formValidation()
  }
  formValidation(){
    this.signUpForm = this.fb.group({
      userName: new FormControl('',[Validators.pattern("^[a-zA-Z]+$")]),
      userMob:['',[Validators.required, Validators.maxLength(12)]],
      userEmail:['gmail.com',[Validators.required, Validators.email]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
      gender:['',[Validators.required]],
      userCheck:['',[Validators.requiredTrue]]

    });

}

}
