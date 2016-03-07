module app.domain{
    export class Vsts implements app.boot.IVstsModel{
        constructor(public type: string,
                    public id: string,
                    public url: string,
                    public bitly_Vsts_url: string,
                    public bitly_url: string,
                    public embed_url: string,
                    public username: string,
                    public source: string,
                    public rating: string,
                    public caption: string,
                    public content_url: string,
                    public import_datetime: string,
                    public trending_datetime: string, 
                    public images: app.boot.IVstsImageVariantsModel){
            
        }
    }
}