/**
 * Created by serg on 05.07.16.
 */
(function () {

  'use strict';

  angular.module('testChatApp')
    .component('messages', {
      templateUrl: 'app/view/messages.html',
      controller: ['Author', 'dialogsData', '$stateParams', 'lodash', '$timeout', '$state', messagesCtrl],
      // get username from main controller
      bindings: {
        username: '<'
      }
    });

  function messagesCtrl(Author, dialogsData, $stateParams, lodash, $timeout, $state) {

    let self = this;

    let dialogId = parseInt($stateParams.item),
      dialogVal = lodash.find(dialogsData, {id: dialogId});


    self.pageLoader = true;
    self.sendLoader = false;

    $timeout(function() {
      self.pageLoader = false;
    }, 2000);


    // Get parts
    if(dialogVal === undefined) {
      $state.go('dialogs');
    } else {
      self.messList = dialogVal.parts;
    }


    /**
     * Send text func
     * @param {string}text
     */
    self.send = function (text) {
      self.sendLoader = true;
      let author = new Author(2, self.username, text);

      // Make send loader
      $timeout(function() {
        self.messList.push(author);
        self.sendLoader = false;
      }, 1000);

      self.text = '';
    };

  }

})();
