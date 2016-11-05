/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    var app=angular.module('movie.top250');
    app.config(function ($routeProvider) {
        $routeProvider
        //:表示page可以改变
            //?表示这个参数可以为空
            .when("/top250/:page?",{
                templateUrl:"modules/top250/template.html",
                controller:'movie.top250Ctrl'
            })
    })
})(angular)