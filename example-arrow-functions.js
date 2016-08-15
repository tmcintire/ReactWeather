// var names = ['Andrew', 'Tim', 'Andy', 'Briana', 'Kadie', 'Joe'];

// names.forEach(function(name) {
// 	console.log('forEach', name);
// });

// Using arrow functions to do the same thing

// names.forEach((name) => console.log('arrow func', name));


// // Returning a value
// var returnMe = (name) => name + '!';
// console.log(returnMe('Tim'));

// Arrow functions take on parents "this" binding

// var person = {
// 	name: 'Tim',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name);
// 		});
// 	}
// };

// person.greet();

// Challenge Area
// function add (a, b) {
// 	return a + b;
// }


// Statement with brackets
var addStatement = (a, b) => {
	return a + b;
}


//Expression Statement
var combStatement = (a, b) => a + b;



console.log(combStatement(4, 7));


// console.log(add(1, 3));
// console.log(add(9,0));











