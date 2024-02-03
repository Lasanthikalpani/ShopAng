import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm=this.fb.group({
    fullname:['',[Validators.required,Validators.pattern(/^[a-z ,.'-]+$/i

    )]],
    email:['',[Validators.required,Validators.email]],
    passWord:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]

  },{
    Validators:passwordMatchValidator
  })


  constructor(private fb:FormBuilder){}
    get fullNamne(){
      return this.registerForm.controls['fullname'];

    }

    get email(){
      return this.registerForm.controls['email'];

    }
    get passWord(){
      return this.registerForm.controls['passWord'];

    }

    get confirmPassword(){
      return this.registerForm.controls['confirmPassword'];

    }





  
}
