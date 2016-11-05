/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    var app=angular.module('movie.subject',[]);
    app.controller('movie.subjectCtrl', function ($scope,httpProService,$routeParams) {
        // $scope.name=$routeParams.id;
        var url="https://api.douban.com/v2/movie/subject/"+$routeParams.id;
        var pararms={
            apikey:'00fa6c0654689a0202ef4412fd39ce06',
        };
        httpProService
            .jsonp(url,pararms,function (data) {
                $scope.data=data;
                console.log(data);
                $scope.$apply();//更新$scope
            })
    })

})(angular)