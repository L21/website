import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
@Injectable()
export class MyselfService {

  constructor(private httpService : HttpService) { }


  getAuthorInfo() {
  	return this.httpService.getAuthorInfo();
  }
}
