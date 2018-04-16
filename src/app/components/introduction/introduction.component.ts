import { Component, OnInit } from '@angular/core';
import {MyselfService} from '../../service/myself.service';
import { HttpService } from '../../service/http.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  providers: [MyselfService,  HttpService],
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  private authorDescription;
  imageurl: string;
  constructor(private MyselfService: MyselfService) { }

  ngOnInit() {
  	this.imageurl = "../../assets/img/myself.jpg";
  	this.MyselfService.getAuthorInfo().subscribe(
  		response =>{
        if (response.error) {
          console.log('get education failed');
        } else {
          this.authorDescription = response.authorInformation.description.split('\n');
        }
      },
      error => {
        console.log('http fail');
      });
  }

}
