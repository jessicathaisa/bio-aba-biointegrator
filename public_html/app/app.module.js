/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('bioIntegrator', [
    'ngTranslate',
    'ngStorage',
    'ngRoute'
]);


angular.module('bioIntegrator').service('LoginService', LoginService);

function LoginService ($localStorage) {
    this.getLogin = function () {
        return $localStorage.loggedUser;
    };
    
    this.setLogin = function (login) {
        $localStorage.loggedUser = login;
    };
}

angular.module('bioIntegrator').
  directive('showErrors', function() {
    return {
      restrict: 'A',
      require:  '^form',
      link: function (scope, el, attrs, formCtrl) {
        // find the text box element, which has the 'name' attribute
        var inputEl   = el[0].querySelector("[name]");
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        // get the name on the text box so we know the property to check
        // on the form controller
        var inputName = inputNgEl.attr('name');

        // only apply the has-error class after the user leaves the text box
        inputNgEl.bind('blur', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        })
      }
    }
  });