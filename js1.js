var app ={
 pow: function(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
};

try{
    module.exports = app;
}catch(e){}