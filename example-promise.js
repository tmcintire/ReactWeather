// // Old CALLBACK method

// function getTempCallback(location, callback) {
// 	callback(undefined, 89);
// 	callback('City not found');
// }

// getTempCallback('philadelphia', function(err, temp) {
// 	if(err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });



// // Function redone with PROMISES
// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(83);
// 			reject('City was not found');
// 		}, 1000);
		
// 	});
// }

// getTempPromise('Huntsville').then(function(temp) {
// 	console.log('promise success', temp);
// }, function(err) {
// 	console.log('promise failed', err);
// });


// Challenge Area
function addPromise(a, b) {
	return new Promise(function(resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		} else {
			reject('These are not numbers');
		}
	});
}

addPromise(2, 4).then(function(sum) {
	console.log('success', sum);
}, function(err) {
	console.log('Not a number', err);
});





