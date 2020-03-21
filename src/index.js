exports.min = function min (array) {
  return Math.min(...array);
}

exports.max = function max (array) {
  return Math.max(...array);
}

exports.avg = function avg (array) {
  return array.reduce(function(x,y){return x + y;},0)/array.length;
}