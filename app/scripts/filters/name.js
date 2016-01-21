
angular.module('angularjsLabsApp').filter('name',
    function () {
        return function (contact) {
            return contact.firstName + ' ' + contact.surname;
        }
    });