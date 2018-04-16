"use strict";

const mongodb = require('mongodb');
const config = require('./config');

class Db{
	constructor(){
		this.MongoClient = mongodb.MongoClient;
		this.url = config.url
		this.objectID = mongodb.ObjectID;
	}

	connectDb(callback){
		this.MongoClient.connect(this.url, (err, db) => {
		  if (err) throw err;
		  callback(db, this.objectID);
		});
	}
}
module.exports = new Db();