import { Component, OnInit } from '@angular/core';
import {MyselfService} from '../../service/myself.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [MyselfService,  HttpService],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 	private authorLastName;
 	private authorFirstName;
	constructor(private MyselfService: MyselfService) { }

	ngOnInit() {
		this.MyselfService.getAuthorInfo().subscribe(
	  		response =>{
	        if (response.error) {
	          console.log('get education failed');
	        } else {
	          this.authorLastName = response.authorInformation.lastname;
	          this.authorFirstName = response.authorInformation.firstname;
	        }
	      },
	      error => {
	        console.log('http fail');
	      });

	}

}

