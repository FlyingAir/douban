/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    var app=angular.module('movie.searchMovie_type');
    app.config(function ($routeProvider) {
        $routeProvider
        //:表示page可以改变
        //?表示这个参数可以为空
        //     .when("/searchMovie/:q/:page?",{
        //         templateUrl:"modules/searchMovie/template.html",
        //         controller:'movie.searchMovieCtrl'
        //     })
            .when("/searchMovie_type/:tag/:page?",{
                templateUrl:"modules/searchMovie_type/template.html",
                controller:'movie.searchMovie_typeCtrl'
            })

    })
})(angular)