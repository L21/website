import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';
@Injectable()
export class EducationInfoService {
  constructor(private httpService : HttpService) { }
  
  getEducationInfo() {

    return this.httpService.getAuthorEducation();

  }

}

