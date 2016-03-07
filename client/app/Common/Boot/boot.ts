module app.boot{
    export interface IVstsImageModel{
        url?: string;
        width?: string;
        height?: string;
        size?: string;
        frames?: string;
        mp4?: string;
        mp4_size?: string;
        webp?: string;
        webp_size?: string;
    }
    export interface IVstsImageVariantsModel{
        
                fixed_height: IVstsImageModel;
                fixed_height_still: IVstsImageModel;
                fixed_height_downsampled: IVstsImageModel;
                fixed_width: IVstsImageModel;
                fixed_width_still: IVstsImageModel;
                fixed_width_downsampled: IVstsImageModel;
                fixed_height_small: IVstsImageModel;
                fixed_height_small_still: IVstsImageModel;
                fixed_width_small: IVstsImageModel;
                fixed_width_small_still: IVstsImageModel;
                downsized: IVstsImageModel;
                downsized_still: IVstsImageModel;
                downsized_large: IVstsImageModel;
                original: IVstsImageModel;
                original_still: IVstsImageModel;
    }
    export interface IVstsModel{
        type: string;
        id: string;
        url: string;
        bitly_Vsts_url: string;
        bitly_url: string;
        embed_url: string;
        username: string;
        source: string;
        rating: string;
        caption: string;
        content_url: string;
        import_datetime: string;
        trending_datetime: string; 
        images: IVstsImageVariantsModel;       
    }    

    export interface IVstsListModel{
        vstsList: IVstsModel[];
        isEmpty: boolean;
        click(IVstsModel):void;
    }

    export interface IVstsSearchModel{
        vstsList: IVstsModel[];
        query: string;
        queryVsts(IVstsModel):void;
        click(IVstsModel):void;
    }
    
    export interface IDataAccessService{
        getVstsResource(): angular.resource.IResourceClass<app.boot.IVstsResource>;
    }
    
    export interface IVstsResource extends angular.resource.IResource<IVstsModel>{
        
    }
}