import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No servers added';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.serverCreationStatus = 'Server created';
  }
  onUpdateServerName(event: any) {
    console.log(event);
  }

}
