import { Component } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(){

  }

  ngOnInit():void{

  }

  user_records:any[] = []
  data={
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }

  doRegistration(Values: any){
    if(localStorage.getItem('users')){
      this.user_records = JSON.parse(localStorage.getItem('users')!); // Add '!' to assert that the value is not null
    } else {
      this.user_records = [];
    }
  
    if(this.user_records.some((v) => {
      return v.email == this.data.email
    })){
      alert("Duplicate Data")
    }else{
      this.user_records.push(this.data)
      localStorage.setItem("users",JSON.stringify(this.user_records))
      alert("Hi " + this.data.name + " you are successfuly registered") 
    }
  }
}
