module client {
    'use strict';   
    
    // The initialize function must be run each time a new page is loaded
    Office.initialize = function(reason){
    };
    var main = angular.module("Vsts", 
                              ["common.services",
                               "ngRoute"]);
    main.config(routeConfig);
    
    routeConfig.$inject = ["$routeProvider"]; 
    function routeConfig($routeProvider: angular.route.IRouteProvider): void {
        $routeProvider
            .when("/vstsList",
            {
                templateUrl: "app/List/vstsListView.htm",
                controller: "VstsListCtrl as vm"
            })
            .when("/search",
            {
                templateUrl: "app/Search/searchView.htm",
                controller: "VstsSearchCtrl as vm"
            })
            .otherwise("/search");
    }
    
    /**
     * AppLoader
     */
    export class AppLoader {
        constructor() {
            
        }
    }
}