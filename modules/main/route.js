/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    //路由主模块
    var app = angular.module('movie.mainApp');
    //配置路由表
    app.config(function ($routeProvider) {
        $routeProvider
        // 默认的地址
            .otherwise({
                // redirectTo:重定向的地址
                redirectTo: '/in_theaters'
            })
    })
})(angular)