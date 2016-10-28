angular.module('myInput', [])
.directive('myInput', function() {
  return {
    scope: {
      index: '@',
      title: '@',
    },
    templateUrl: 'my_input.html',
    controller: 'InputCtrl'
  }
})
.controller('InputCtrl', function($scope) {
  $scope.index = this.index;
  $scope.title = this.title;
});