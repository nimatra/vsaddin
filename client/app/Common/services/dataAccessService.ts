module app.common{
    export class DataAccessService implements app.boot.IDataAccessService{
        
        static $inject = ["$resource"];
        constructor(private $resource: angular.resource.IResourceService){
            
        }
        
        authenticate() {
            return this.$resource("https://api.giphy.com/v1/Vstss/search");
        }
        
        getVstsResource(): angular.resource.IResourceClass<app.boot.IVstsResource> {
            return this.$resource("https://api.giphy.com/v1/Vstss/search");
        }
    }
    angular.module("common.services")
           .service("dataAccessService", DataAccessService);
}