/**
 * Created by serg on 05.07.16.
 */
(function () {

  'use strict';

  angular.module('testChatApp')
    .factory('dialogsData', dialogsData);

  function dialogsData() {

    let data = [
      {
        id: 1,
        subject: 'Письмо 1',
        created: '2016-03-01 23:59',
        parts: [
          {
            id: 1,
            author: 'Василий',
            text: 'Привет, как дела?'
          },
          {
            id: 2,
            author: 'Игорь',
            text: 'Привет, все хорошо, спасибо!'
          }
        ]
      },
      {
        id: 2,
        subject: 'Письмо 2',
        created: '2016-03-02 14:19',
        parts: [
          {
            id: 1,
            author: 'Пётр',
            text: 'Здравствуйте, тут есть кто-нибудь?'
          },
          {
            id: 2, author: 'Василий',
            text: 'Да, я вас слушаю!'
          }
        ]
      },
      {
        id: 3,
        subject: 'Письмо 3',
        created: '2016-04-01 11:10',
        parts: [
          {
            id: 1,
            author: 'Пётр',
            text: 'Здравствуйте, перезвоните мне!'
          },
          {
            id: 2, author: 'Василий',
            text: 'Хорошо, сейчас перезвоню!'
          }
        ]
      }
    ];

    return data;

  }

})();
