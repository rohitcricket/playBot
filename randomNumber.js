'use strict';

const getRandom = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function(ctx, cb) {
	let getResult = getRandom(1,4);
	return ctx.data.replyData == getResult ? cb(null, {
		result: "Yay! You won!",
		resultVal: getResult
	}) : cb(null, {
		result: "Sorry! You lost...",
		resultVal: getResult
	});

}