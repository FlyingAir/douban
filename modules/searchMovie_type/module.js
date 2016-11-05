/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    // 创建正在热映的子模块
    var app=angular.module('movie.searchMovie_type',[])
    //$routeParams用来获得url的参数
    app.controller("movie.searchMovie_typeCtrl", function ($scope,$route,$routeParams,httpProService) {
        var url='https://api.douban.com/v2/movie/search';
        $scope.page=parseInt($routeParams.page||"1") ;
        // 开始页数
        $scope.startPage=($scope.page-1)*5;
        // 每页的条目数
        $scope.pageCount=5;
        console.log($routeParams);
        var pararms={
            apikey:'00fa6c0654689a0202ef4412fd39ce06',
            start:$scope.startPage,
            count:$scope.pageCount,
            // q:$routeParams.q,
            tag:$routeParams.tag
        };
        //输入页码跳转功能
        $scope.pageNum= $scope.page;
        $scope.submit= function (pageNum) {
            $route.updateParams(
                {page: pageNum}
            )
        }
        // 上一页
        $scope.upPage= function (page) {
            if(page>0) {
                $route.updateParams(
                    {page: page}
                )
            }
        }
        // 下一页
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