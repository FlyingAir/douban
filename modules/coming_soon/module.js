/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    // 创建正在热映的子模块
    var app=angular.module('movie.coming_soon',[])
    //$routeParams用来获得url的参数
    app.controller("movie.coming_soonCtrl", function ($scope,$route,$routeParams,httpProService) {
        var url='https://api.douban.com/v2/movie/coming_soon';
        $scope.page=parseInt($routeParams.page||"1") ;
        $scope.startPage=($scope.page-1)*5;
        $scope.pageCount=5;
        var pararms={
            apikey:'00fa6c0654689a0202ef4412fd39ce06',
            start:$scope.startPage,
            count:$scope.pageCount
        };
        $scope.pageNum= $scope.page;
        $scope.submit= function (pageNum) {
            $route.updateParams(
                {page: pageNum}
            )
        }
        $scope.upPage= function (page) {
            if(page>0) {
                $route.updateParams(
                    {page: page}
                )
            }
        }
        $scope.downPage= function (page) {
            if(page<$scope.total/$scope.pageCount+1) {
                $route.updateParams(
                    {page: page}
                )
            }
        }
        httpProService
            .jsonp(url,pararms,function (data) {
                $scope.jsonpdata=data;
                $scope.subjects=data.subjects;
                $scope.title=data.title;
                $scope.total=data.total;
                $scope.maxPage=Math.ceil($scope.total/$scope.pageCount);
                console.log(data);
                $scope.$apply();//更新$scope
            })
    })


})(angular);