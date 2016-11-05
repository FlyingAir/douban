/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    var app=angular.module('movie.in_theaters');
    app.config(function ($routeProvider) {
        $routeProvider
        //:表示page可以改变
            //?表示这个参数可以为空
            .when("/in_theaters/:page?",{
                templateUrl:"modules/in_theaters/template.html",
                controller:'movie.in_theatersCtrl'
            })
    })
})(angular)