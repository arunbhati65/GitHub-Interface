import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../users.service';
import { User } from '../user/user.model';
import {Subject} from "rxjs";
import { Packet } from '../user/packet.model';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class AppComponent {
 
  //users : User[];
  coderName ='';
  usersArray : User[];
  packet :Packet;
  search: Subject<string> = new Subject<string>();
  constructor(private serverService: ServerService) {

  }


  onInputName(event :Event){
    this.coderName=(<HTMLInputElement>event.target).value;
  }

  // onGet() {
  //   console.log("OnGet")
  //   this.serverService.getUsers(this.coderName)
  //     .subscribe(
  //       (users: any) => console.log(users)
  //     );
  // }
  onGet() {

   // this.search.next(this.coderName);

    this.serverService.getUsers(this.coderName)
    .subscribe(

      (packetResponse)=>{
        this.packet=packetResponse.json();
        console.log("hi packet");
        console.log(this.packet);
        this.usersArray=this.packet.items;


     //  console.log(userResultArray);
    //  //   this.usersArray=JSON.parse(userResultArray['_body']);
    //   this.usersArray=userResultArray.item
    //  console.log(this.usersArray);
      }

    )
  }
 

}
