var app = angular.module( 'angularjs-anchorScroll', [] );

app.controller( 'myCtrl', function ( $scope, $location, $anchorScroll ) {
    $scope.scrollTo = function ( id ) {
        $location.hash( id );
        $anchorScroll();
    }
} )
