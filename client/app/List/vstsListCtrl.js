var app;
(function (app) {
    var gifList;
    (function (gifList) {
        var VstsListCtrl = (function () {
            function VstsListCtrl(dataAccessService) {
                this.dataAccessService = dataAccessService;
                this.isEmpty = false;
                this.vstsList = [];
            }
            VstsListCtrl.prototype.click = function (vsts) {
                this.isEmpty = false;
            };
            VstsListCtrl.$inject = ["dataAccessService"];
            return VstsListCtrl;
        }());
        angular.module("Vsts")
            .controller("VstsListCtrl", VstsListCtrl);
    })(gifList = app.gifList || (app.gifList = {}));
})(app || (app = {}));
