import { Component, OnInit } from '@angular/core';
import {EducationInfoService} from './education-info.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  providers: [EducationInfoService,  HttpService],
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  private educations;

  constructor(private EducationInfoService: EducationInfoService, private HttpService: HttpService) { }

  ngOnInit() {
  	this.EducationInfoService.getEducationInfo().subscribe(
  		response =>{
        if (response.error) {
          console.log('get education failed');
        } else {
          this.educations = response.authorEducation;
        }
      },
      error => {
        console.log('http fail');
      });
  }



}
