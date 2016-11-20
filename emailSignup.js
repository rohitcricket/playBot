'use strict';

const Mongo = require('mongodb').MongoClient;
const url = "mongodb://<topRobot>:<galt2016>@ds049486.mlab.com:49486/playbot"; 

module.exports = function(ctx, cb) {
	let mailID = ctx.data.replyData;
	if(mailID) {
		Mongo.connect(url, function(error, db) {
			db.collection('players')
				.update({
					email: mailID
				}, {
					email: mailId
				}, {
					upsert: true
				}, (error, result) => {
					if(!error) {
						db.close();
						cb(null, {});
					}
				});
		});
	} else {
		cb(null, {});
	}
}