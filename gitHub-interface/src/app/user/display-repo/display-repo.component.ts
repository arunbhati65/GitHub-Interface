import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { ServerService } from '../../users.service';
import { Repo } from '../repo.model';
@Component({
  selector: 'app-display-repo',
  templateUrl: './display-repo.component.html',
  styleUrls: ['./display-repo.component.css']
})
export class DisplayRepoComponent implements OnInit {
  @Input() user:User
  repos : Repo[];
  constructor(private serverService: ServerService) { }

  ngOnInit() {
    

      // this.search.next(this.coderName);
       console.log("hi i reached successfully");
       this.serverService.getRepos(this.user.login)
       .subscribe(
   
         (packetResponse)=>{
           this.repos=packetResponse.json();
           console.log("hi Repos");
           console.log(this.repos);
           
   

         }
   
       )
     }
  
}
