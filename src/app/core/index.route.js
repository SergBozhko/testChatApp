(function () {
  'use strict';

  angular
    .module('testChatApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('dialogs', {
        url: '/dialogs',
        templateUrl: 'app/view/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('dialogs.item', {
        url: '/:item',
        template: '<messages username="main.username"></messages>'
      });

    $urlRouterProvider.otherwise('/dialogs');
  }

})();
