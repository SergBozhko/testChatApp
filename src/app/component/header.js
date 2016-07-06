/**
 * Created by serg on 05.07.16.
 */
(function() {

  'use strict';

  angular.module('testChatApp')
    .component('mainHeader', {
      templateUrl: 'app/view/header.html',
      controller: mainHeaderCtrl,
      bindings: {
        username: '='
      }
    });

  function mainHeaderCtrl() {

    let self = this;

    self.logo = 'SuperChat';

  }

})();
