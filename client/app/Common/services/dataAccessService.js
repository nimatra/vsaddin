var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.authenticate = function () {
                return this.$resource("https://api.giphy.com/v1/Vstss/search");
            };
            DataAccessService.prototype.getVstsResource = function () {
                return this.$resource("https://api.giphy.com/v1/Vstss/search");
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular.module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
