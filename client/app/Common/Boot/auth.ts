module app.boot{
    export interface IAuth{
        gifs: IVstsModel[];
        query: string;
        queryVsts(IGifModel):void;
        click(IGifModel):void;
    }
    
    export interface IDataAccessService{
        getVstsResource(): angular.resource.IResourceClass<app.boot.IVstsResource>;
    }
    
    export interface IVstsResource extends angular.resource.IResource<IVstsModel>{
        
    }
}