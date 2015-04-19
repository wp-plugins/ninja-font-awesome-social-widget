'use strict';

jQuery('html').attr('ng-app', 'NINJA_APP');

var app = angular.module('NINJA_APP', []);

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
