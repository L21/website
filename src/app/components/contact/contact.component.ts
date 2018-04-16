import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  gitImageUrl: string;

  constructor() { }

  ngOnInit() {
  	this.gitImageUrl = "../../assets/img/GitHub.png";
  	
  }

}
