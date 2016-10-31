import myInput from './my_input';

const app = angular.module('app', [
  // 'ngRoute',
  'myInput',
  // 'InputsCtrl',
]);

// .config([
//   '$routeProvider',
//   ($routeProvider) => {
//     $routeProvider.when('/', {
//       templateURL: '/client/inputs.html',
//       controller: 'InputsCtrl',
//     });
//   },
// ]);

export default app;
