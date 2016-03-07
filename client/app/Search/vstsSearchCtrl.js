var app;
(function (app) {
    var search;
    (function (search) {
        var VstsSearchCtrl = (function () {
            function VstsSearchCtrl(dataAccessService) {
                this.dataAccessService = dataAccessService;
            }
            VstsSearchCtrl.prototype.queryVsts = function () {
                var _this = this;
                var VstsResource = this.dataAccessService.getVstsResource();
                VstsResource.get({
                    api_key: "dc6zaTOxFJmzC",
                    q: this.query
                }, function (data) {
                    _this.vstsList = data.data;
                });
            };
            VstsSearchCtrl.prototype.click = function (Vsts) {
                var image = '<img src="' + Vsts.images.original.url + '" border="0" />';
                var item = Office.context.mailbox.item;
                if (item.body.setSelectedDataAsync) {
                    item.body.setSelectedDataAsync(image, { coercionType: Office.MailboxEnums.BodyType.Html }, function (asyncResult) {
                        if (asyncResult.status == "failed") {
                            console.log("Inserting Vsts failed with error: " + asyncResult.error.message);
                        }
                    });
                }
                else {
                    // Ask the user to update their Outlook 2013 to use this add-in
                    $('#desktop-notification').html("Please update your outlook client <a href='https://support.microsoft.com/en-us/kb/3114349'>here</a> to use this Add-in.");
                }
            };
            VstsSearchCtrl.$inject = ["dataAccessService"];
            return VstsSearchCtrl;
        }());
        angular.module("Vsts")
            .controller("VstsSearchCtrl", VstsSearchCtrl);
    })(search = app.search || (app.search = {}));
})(app || (app = {}));
