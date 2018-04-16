import { Component, OnInit } from '@angular/core';

import {CareerInfoService} from './career-info.service'
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  providers: [CareerInfoService, HttpService],
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  private careers;
  constructor(private CareerInfoService: CareerInfoService) { }

  ngOnInit() {
  	this.CareerInfoService.getCareerInfo().subscribe(
  		response => {
	        if (response.error) {
	          console.log('get career failed');
	        } else {
	          this.careers = response.authorCareer;
        	}
      },
      error => {
        console.log('http fail');
      });
  }

}
