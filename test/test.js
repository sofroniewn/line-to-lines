var assert = require('assert')

var raytopoly = require('../index.js')

function close(x, y) {
	return (x - y) < .01
}

function check(x, y) {
	assert.equal(close(x, y), true)
}


lineA = [[0, 0], [0, 2]]
lines = [[[-1,1],[1,1],[1,3],[-1,3]],
  [[2, 2], [2, 3]]]
results = raytopoly(lineA, lines)
console.log(results)
check(results.distance, 1)
check(results.angle, 90)
check(results.intersection[0], 0)
check(results.intersection[1], 1)
