import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  selectedNav:string = "recipes";

  onNavigate(site:string) {
    this.selectedNav = site;
  }






}


