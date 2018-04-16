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
	            	responseData.message = 'Get author information successful.';
	           		res.status(200).json(responseData);
	           	}
			});
	        
		});		

		this.app.post('/getAuthorCareer', (req,res) =>{
			let responseData = {}
	        userInfo.getAuthorCareer( (err,result)=>{

	           	if (err) {
           			responseData.error = true;
	            	responseData.message = 'Internal Server error.';
	           		res.status(404).json(responseData);
	           	}else{

	           		responseData.error = false;
	           		responseData.authorCareer = result;
	            	responseData.message = 'Get author career successful.';
	           		res.status(200).json(responseData);
	           	}
			});
	        
		});

		this.app.post('/getAuthorEducation', (req,res) =>{
			let responseData = {}
	        userInfo.getAuthorEducation( (err,result)=>{

	           	if (err) {
           			responseData.error = true;
	            	responseData.message = 'Internal Server error.';
	           		res.status(404).json(responseData);
	           	}else{

	           		responseData.error = false;
	           		responseData.authorEducation = result;
	            	responseData.message = 'Get author education successful.';
	           		res.status(200).json(responseData);
	           	}
			});
	        
		});

		this.app.post('/getAuthorProjects', (req,res) =>{
			let responseData = {}
	        userInfo.getAuthorProjects( (err,result)=>{

	           	if (err) {
           			responseData.error = true;
	            	responseData.message = 'Internal Server error.';
	           		res.status(404).json(responseData);
	           	}else{

	           		responseData.error = false;
	           		responseData.authorProjects = result;
	            	responseData.message = 'Get author education successful.';
	           		res.status(200).json(responseData);
	           	}
			});
	        
		});
	}
}
module.exports = authorData;