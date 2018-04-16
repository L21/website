'use strict';

const userInfo = require('./userInfo');
const path = require('path');

class authorData{

	constructor(app){
		this.app = app;
	}

	authorDataConfig() {

		this.app.post('/getAuthorInfo', (req,res) =>{
			let responseData = {}
	        userInfo.getAuthorInfo( (err,result)=>{

	           	if (err) {
           			responseData.error = true;
	            	responseData.message = 'Internal Server error.';
	           		res.status(404).json(responseData);
	           	}else{
	           		responseData.error = false;
	           		responseData.authorInformation = result;
	            	responseData.message = 'Get user information successful.';
	           		res.status(200).json(responseData);
	           	}
			});
	        
		});		
	}
}
module.exports = authorData;