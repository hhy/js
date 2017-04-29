console.info('hello');
var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
                                                    $scope.greeting = 'Hola!';
                                                    var body = d3.select("#d3");
                                                    var div = body.append("div");
                                                    div.html("Hello, world!");

                                                  }]);