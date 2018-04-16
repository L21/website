import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Injectable()
export class ProjectsInfoService {
  	constructor(private httpService : HttpService) { }

  	getProjectInfo() {
	  	return this.httpService.getAuthorProjects();
    }

}

