console.info('hello');

angular.module('d3', [])
  .factory('d3', [function(){
    var d3;
    // insert d3 code here
    return d3;
  }]);


var myApp = angular.module('myApp',['d3']);

myApp.controller('GreetingController', ['$scope',  function($scope) {
  $scope.greeting = 'Hola!';
  var body = d3.select("#d3");
  var div = body.append("div");
  div.html("Hello, world!");
  var axisScale = d3.scaleLinear();
  axisScale.domain([0,100]);
  axisScale.range([0,100]);
//  var xAxis = d3.svg.axis().scale(axisScale);
  //  typeof(xAxis);
  let  margin = {top: 20, right: 20, bottom: 50, left: 70},
    width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);

  var svg = d3.select("#d3").append("svg")
      .attr('class', 'axis')
    .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);
  
  d3.select(".axis")
    .call(d3.axisBottom(axisScale));

}]);

