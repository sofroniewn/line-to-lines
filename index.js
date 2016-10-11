var _ = require('lodash')
var linetoline = require('line-to-line')


module.exports = function (lineA, lines) {
  // deterimine interesction point of ray with poly by calling ray to line on each polygon segment
  var line
  var results = []
  for (var k = 0; k < lines.length; k++) {
    var poly = lines[k]
    for (var i = 0, j = 0; i < poly.length-1; i++) {
      j = i+1
      line = [[poly[i][0], poly[i][1]], [poly[j][0], poly[j][1]]];
      var hit = linetoline(lineA, line)
      hit.id = i
      hit.component = k
      if (hit) results.push(hit)
    }
  }

  if (results.length) {
    var ind = _.indexOf(results, _.min(results, function (i) { return i.distance }))
    // if multiple minima, average together angles and return results
    return results[ind]
  }
  return {startPoint: lineA[0], distance:Infinity, angle:0, intersection:lineA[0], id:false, component:false};
}



