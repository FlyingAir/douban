/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    var app=angular.module('movie.mainApp',[
        'ngRoute',
        'movie.services',
        'movie.in_theaters',
        'movie.coming_soon',
        'movie.top250',
        'movie.searchMovie',
        'movie.searchMovie_type',
        'movie.subject',

    ])
    app.controller('movie.mainCtrl',function ($scope,$route,$location) {
        //搜索框
        $scope.searchText='';
        //点击回车搜索电影
        $scope.searchEnter=function () {
            //$location.path可以用来更新
            console.log($location.path());
            $location.path('/searchMovie_type/'+$scope.searchText);
            //route.updateParams只能追加不能删除前面的参数
            //$route.updateParams({q:'张艺谋'});
        };
    })
})(angular);