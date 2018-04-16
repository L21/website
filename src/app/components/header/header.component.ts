import { Component, OnInit } from '@angular/core';
import {MyselfService} from '../../service/myself.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [MyselfService,  HttpService],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  imageurl: string;
  greeting: string;
  authorFirstName: string;

  constructor(private MyselfService: MyselfService) { }

  ngOnInit() {
  	this.imageurl = "../../assets/img/image.png";
  	this.setGreeting();
    this.MyselfService.getAuthorInfo().subscribe(
        response =>{
          if (response.error) {
            console.log('get education failed');
          } else {
            this.authorFirstName = response.authorInformation.firstname;
          }
        },
        error => {
          console.log('http fail');
        });

 
  }

  setGreeting() {
  	var d = new Date();
    var time = d.getHours();

    if (time < 12 && time > 3) {
        this.greeting = "Good Morning!";
    } else {
    	this.greeting = "Good " + ((time < 19 && time >= 12) ? "Afternoon" : "Evening"); 
    }
  }

}
