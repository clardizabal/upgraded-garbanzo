export default angular.module('myInput', [])
.directive('myInput', () => ({
  scope: {
    index: '@',
    title: '@',
  },
  templateUrl: 'my_input.html',
  controller: 'InputCtrl',
}))
.controller('InputCtrl', () => {
});
