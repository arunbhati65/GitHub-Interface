import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../users.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class AppComponent {
 
  users : User[];
  constructor(private serverService: ServerService) {}

  onGet() {
    console.log("OnGet")
    this.serverService.getUsers()
      .subscribe(
        (users: any) => console.log(users)
      );
  }

}
