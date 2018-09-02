import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../users.service';

import {Subject} from "rxjs";

import { OrderPipe } from 'ngx-order-pipe';
import { User } from '../models/user.model';
import { Packet } from '../models/packet.model';
@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class AppComponent {
 
  noUser: boolean=false;
  //users : User[];
  
  coderName ='';
  usersArray : User[];
  sortedUsersArray : User[];
  order: string = 'info.name';
  reverse: boolean = false;
  totalUsers=0;
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

  
  onGet(event :Event) {
    this.coderName=(<HTMLInputElement>event.target).value;

    console.log("hi i reached successfully");
    this.serverService.getUsers(this.coderName)
    .subscribe(

      (packetResponse)=>{
        this.packet=packetResponse.json();
        console.log("hi packet");
        console.log(this.packet);
        this.usersArray=this.packet.items;
        this.totalUsers=this.usersArray.length;
        if(this.totalUsers==0){
          this.noUser=true;
        }


    
      }

    )
  }
 

}
