import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
 myInfo: UserInfo | undefined;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending request to server");
    this.showUserInfo();
  }

  getUserInfo(){
   return this.http.get<UserInfo>('https://newebaywebsite-default-rtdb.firebaseio.com/myInfo.json');

  }
  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo)=>{
      console.log(data);
      this.myInfo = data;
    })
  }
}
function data(data: any) {
  throw new Error('Function not implemented.');
}

