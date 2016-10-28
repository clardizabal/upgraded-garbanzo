"use strict";
angular.module("app", [])
  .component('myInput', {
    templateUrl: 'my_input.html',
    controller: function($scope) {
      $scope.index = this.index;
      $scope.title = this.title;
    },
    bindings: {
      index: '=',
      title: '=',
      value: '='    
    }
  }) 
  // .directive('myInput', function() {
  //   return {
  //     scope: {
  //       index: '=',
  //       title: '=',
  //       value: '='
  //     },
  //     templateUrl: 'my_input.html',
  //     controller: 'InputCtrl'
  //   }
  // })
  // .controller('InputCtrl', function($scope) {
  //   $scope.index = this.index;
  //   $scope.title = 'Current Age';
  //   $scope.value = 28;
  // })
