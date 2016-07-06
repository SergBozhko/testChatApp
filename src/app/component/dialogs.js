/**
 * Created by serg on 05.07.16.
 */
(function() {

  'use strict';

  angular.module('testChatApp')
    .component('dialogs', {
      templateUrl: 'app/view/dialogs.html',
      controller: ['dialogsData', dialogsCtrl]
    });

  function dialogsCtrl(dialogsData) {

    let self = this;

    self.list = dialogsData;

  }

})();
