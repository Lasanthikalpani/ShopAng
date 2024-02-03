import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator:ValidatorFn=(control:AbstractControl):ValidationErrors |null=>{
    const passWord=control.get('passWord');
    const confirmPassword=control.get('confirmPassword');


    if(!passWord ||!confirmPassword){
        return null;
    }

    return passWord.value===confirmPassword.value?null:{
            passWordMissMatch:true
    }
}