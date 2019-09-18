import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(selected:string) {
    this.selectedPage.emit(selected);
  }

}
