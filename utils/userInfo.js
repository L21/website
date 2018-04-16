'use strict';

class userInfo{

	constructor(){

		this.Mongodb = require("./mongodb");
	}

	getAuthorInfo(callback) {
		this.Mongodb.connectDb((db,objectID) => {
			db.collection('authorInfo').findOne({}, (err, doc) => {
				db.close();
				callback(err,doc);
			});
		});
	}

	getAuthorCareer(callback) {
		this.Mongodb.connectDb((db,objectID) => {
			db.collection('authorCareer').find({}).toArray( (err, doc) => {
				db.close();
				callback(err,doc);
			});
		});
	}

	getAuthorEducation(callback) {
		this.Mongodb.connectDb((db,objectID) => {
			db.collection('authorEducation').find({}).toArray( (err, doc) => {
				db.close();
				callback(err,doc);
			});
		});
	}

	getAuthorProjects(callback) {
		this.Mongodb.connectDb((db,objectID) => {
			db.collection('authorProjects').find({}).toArray( (err, doc) => {
				db.close();
				callback(err,doc);
			});
		});
	}
}

module.exports = new userInfo();