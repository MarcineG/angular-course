import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName:string;
  serverStatus:string;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverStatus = 'Server has been created! Name: ' + this.serverName;
  }

  onUpdateServerName(event :any) {
    this.serverName = event.target.value;
  }

}
