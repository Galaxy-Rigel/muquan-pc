/**
 * Created by Peter on 2017/1/5.
 */
"use strict";
const app = angular.module('muquan', ['ui.router']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider.state('home', {
        url: '/home',
        views: {
            'viewMain': {
                templateUrl: '/views/home.main.tpl.html',
                controller: 'home.main.ctrl'
            }
        }
    }).state('service', {
        url: '/service',
        views: {
            'viewMain': {
                templateUrl: '/views/service.main.tpl.html',
                controller: 'service.main.ctrl'
            }
        }
    }).state('tool', {
        url: '/tool',
        views: {
            'viewMain': {
                templateUrl: '/views/tool.main.tpl.html',
                controller: 'tool.main.ctrl'
            }
        }
    }).state('design', {
        url: '/design',
        views: {
            'viewMain': {
                templateUrl: '/views/design.main.tpl.html',
                controller: 'design.main.ctrl'
            }
        }
    }).state('designNew', {
        url: '/designNew',
        views: {
            'viewMain': {
                templateUrl: '/views/designNew.main.tpl.html',
                controller: 'designNew.main.ctrl'
            }
        }
    }).state('about', {
        url: '/about',
        views: {
            'viewMain': {
                templateUrl: '/views/about.main.tpl.html',
                controller: 'about.main.ctrl'
            }
        }
    }).state('case',{
        url:'/case',
        views:{
            'viewMain':{
                templateUrl:'/views/case.main.tpl.html',
                controller:'case.main.ctrl'
            }
        }
    }).state('contact',{
        url:'/contact',
        views:{
            'viewMain':{
                templateUrl:'/views/contact.main.tpl.html',
                controller:'contact.main.ctrl'
            }
        }


    });
    $urlRouterProvider.otherwise('home');
}]);

app.run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$stateChangeSuccess',function(event,next,prev){
        let reg = /home/;
        $rootScope.hideNav = false;
        //console.log(next.name);
        if(reg.test(next.name)){
            $('header').addClass('main page');
            $('footer').addClass('main page');
            $('nav').css('background','rgba(0,0,0,0)');
            $rootScope.hideNav = false;
        }else{
            $('header').removeClass('main page');
            $('footer').removeClass('main page');
            $rootScope.hideNav = true;
            $('nav').css('background','rgba(0,0,0,.4)');
        }


        if(next.name=='contact'){
            $('nav').css('background','rgba(0,0,0,0)');
        }

        let NavLi = $('nav ul li');

        for (let i=0;i<NavLi.length;i++){
            NavLi.click(function(){
                $(this).siblings().find('a').removeClass('active');
               $(this).find('a').addClass('active');
            });
        }

    });




}]);


