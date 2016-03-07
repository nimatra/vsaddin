module app.gifList{
    class VstsListCtrl implements app.boot.IVstsListModel{
        vstsList: app.boot.IVstsModel[];
        isEmpty: boolean;
        
        static $inject=["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService){
            this.isEmpty = false;
            this.vstsList=[];
            
        }
        
        click(vsts:app.boot.IVstsModel): void{
            this.isEmpty = false;
        }
    }
    angular.module("Vsts")
        .controller("VstsListCtrl", VstsListCtrl);
}