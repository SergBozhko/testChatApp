/**
 * Created by serg on 06.07.16.
 */
(function () {

  'use strict';

  angular.module('testChatApp')
    .factory('Author', Author);

  // Main User factory
  function Author() {

    class Author {

      constructor(id, author, text) {
        this.id = id || 2;
        this.author = author || 'Пользователь';
        this.text = text;
      }

      changeName(newName) {
        this.author = newName;
      }

      setText(newText) {
        this.text = newText;
      }

    }

    return Author;

  }

})();
