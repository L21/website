import { Component, OnInit } from '@angular/core';
import {ProjectsInfoService} from './projects-info.service';

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [ProjectsInfoService,  HttpService],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private projects;
  constructor(private ProjectsInfoService : ProjectsInfoService) { }

  ngOnInit() {
  	this.ProjectsInfoService.getProjectInfo().subscribe(
  		response => {
	        if (response.error) {
	          console.log('get projects failed');
	        } else {
	          this.projects = response.authorProjects;
	          for (var i = 0; i < this.projects.length ; i++) {
	          	this.projects[i].details = this.projects[i].details.split('\n');
	          }
        	}
      },
      error => {
        console.log('http fail');
      });
  }

}
