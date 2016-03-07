module app.search{
    class VstsSearchCtrl implements app.boot.IVstsSearchModel{        
        vstsList: app.boot.IVstsModel[];
        query: string;
        
        static $inject=["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService){
            
        }
        
        queryVsts(){
            
            var VstsResource = this.dataAccessService.getVstsResource();
            VstsResource.get({
                    api_key:"dc6zaTOxFJmzC", 
                    q: this.query
                },
                (data: app.domain.Vsts[]) => {
                    this.vstsList = data.data;
                });
        }
        
        click(Vsts:app.boot.IVstsModel): void{
            
            var image =  '<img src="' + Vsts.images.original.url + '" border="0" />';
            var item = Office.context.mailbox.item;
            if (item.body.setSelectedDataAsync) {

                item.body.setSelectedDataAsync(image, {coercionType: Office.MailboxEnums.BodyType.Html}, function (asyncResult) {
                    if (asyncResult.status == "failed") {
                        console.log("Inserting Vsts failed with error: " + asyncResult.error.message);
                    } 
                });

            } else {
                // Ask the user to update their Outlook 2013 to use this add-in
                $('#desktop-notification').html("Please update your outlook client <a href='https://support.microsoft.com/en-us/kb/3114349'>here</a> to use this Add-in.");
            }
        }
        
    }
    angular.module("Vsts")
        .controller("VstsSearchCtrl", VstsSearchCtrl);
}