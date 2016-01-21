'use strict';

/**
 * @ngdoc function
 * @name angularjsLabsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsLabsApp
 */
angular.module('angularjsLabsApp')
    .controller('ContactsCtrl', function ($scope) {

        $scope.contacts = [];

        $scope.add = function (newContact) {
            $scope.contacts.push(newContact);
            $scope.current = {};
        };

        $scope.edit = function (contact) {
            contact.isEditable = !contact.isEditable;
            contact.editLabel = contact.isEditable? 'Save': 'Edit';
        };
        
        $scope.delete = function(contact){;
            $scope.contacts.splice($scope.contacts.indexOf(contact), 1);  
        };

    });
