/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    var app=angular.module('movie.coming_soon');
    app.config(function ($routeProvider) {
        $routeProvider
        //:表示page可以改变
            //?表示这个参数可以为空
            .when("/coming_soon/:page?",{
                templateUrl:"modules/coming_soon/template.html",
                controller:'movie.coming_soonCtrl'
            })
    })
})(angular)