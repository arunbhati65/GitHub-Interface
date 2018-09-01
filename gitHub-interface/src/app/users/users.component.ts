import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../users.service';
import { User } from '../user/user.model';
import {Subject} from "rxjs";
import { Packet } from '../user/packet.model';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class AppComponent {
 
  //users : User[];
  
  coderName ='';
  usersArray : User[];
  sortedUsersArray : User[];
  order: string = 'info.name';
  reverse: boolean = false;

  packet :Packet;
  search: Subject<string> = new Subject<string>();


  options = ['Sort By Name','Sort by Rank'];
  optionSelected: any;


  
onOptionsSelected(event : Event){
 console.log(event); //option value will be sent as event
}
  
  constructor(private serverService: ServerService,private orderPipe: OrderPipe) {
    this.sortedUsersArray=orderPipe.transform(this.usersArray,'info.name');
  }


  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }


  onInputName(event :Event){
    this.coderName=(<HTMLInputElement>event.target).value;
  }

  
  onGet() {


    console.log("hi i reached successfully");
    this.serverService.getUsers(this.coderName)
    .subscribe(

      (packetResponse)=>{
        this.packet=packetResponse.json();
        console.log("hi packet");
        console.log(this.packet);
        this.usersArray=this.packet.items;


    
      }

    )
  }
 

}
