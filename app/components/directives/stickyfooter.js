'use strict';

angular.module('directives')
.directive('stickyfooter', [
    '$http', '$timeout', '$window',  function ($http, $timeout, $window) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                $timeout(function () {
                    var footerHeight = $('#footerCntr').height();
                    $('body').css('margin-bottom', footerHeight);
                });
                angular.element($window).on('resize', function(e){
                    $timeout(function () {
                        var footerHeight = $('#footerCntr').height();
                        $('body').css('margin-bottom', footerHeight);
                    });
                });

            }
        };
    }
]);
