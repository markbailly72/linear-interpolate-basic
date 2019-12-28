var array = require('lodash/array');
let lowIndex, highIndex;
module.exports = class LinearInterpolate {
  constructor(xs, ys) {
    this.xs = xs;
    this.ys = ys;
  }
  at(x) {
  	if (this.xs.includes(x)) {
  		let i = this.xs.indexOf(x);
  		return this.ys[i]; //x is in x
  	}
  	if (x < this.xs[0]) {
  		return this.ys[0]; //x is lower than range of this.xs
  	}
  	if (x > this.xs[this.xs.length-1]) {
  		return this.ys[this.xs.length-1]; //x is higher than range of this.xs
  	}
	lowIndex = array.sortedIndex(this.xs,x);
	highIndex = lowIndex+1;
	return interpolate(this.xs[lowIndex],this.xs[highIndex],this.ys[lowIndex],this.ys[highIndex],x);
  }
 };
 function interpolate(x0,x1,y0,y1,x) {
 	let y = (y0*(x1-x)+y1*(x-x0))/(x1-x0);
 	return y;
 }