'use strict';

angular.module('directives')
.directive('workerInfo',  function () {
  return {
    restrict: 'EA',
    scope: {
      worker: '='
    },
    template: '<div><strong>{{worker.name}}</strong>'+
              '<div class="pull-right">{{worker.mobileNumber}}</div></div>'+
              '<div ng-if="worker.taskAssigned">{{worker.taskAssigned}}</div>'+
              '<div ng-if="!worker.taskAssigned"><i class="text-grey">Available</i></div>'
  };
});