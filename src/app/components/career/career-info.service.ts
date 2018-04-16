import { Injectable } from '@angular/core';

import { HttpService } from '../../service/http.service';


@Injectable()
export class CareerInfoService {
  
  constructor(private httpService : HttpService) { }

  getCareerInfo() {
  	return this.httpService.getAuthorCareer();
  }

}

