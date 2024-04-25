import { Component } from '@angular/core';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent {

  user_records:any[] = []
  datas={
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }

  constructor(){
    if(localStorage.getItem('users')){
      this.user_records = JSON.parse(localStorage.getItem('users')!); // Add '!' to assert that the value is not null
    } else {
      this.user_records = [];
    }
  }

}
