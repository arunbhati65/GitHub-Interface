import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  @Input() user:User;
  showDetails : boolean=false;
  constructor() { }

  ngOnInit() {
  }

 
  onShowHideDetails(){
    this.showDetails=!this.showDetails;
    console.log(this.showDetails);
  }

}
