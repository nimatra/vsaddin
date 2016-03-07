var app;
(function (app) {
    var domain;
    (function (domain) {
        var Vsts = (function () {
            function Vsts(type, id, url, bitly_Vsts_url, bitly_url, embed_url, username, source, rating, caption, content_url, import_datetime, trending_datetime, images) {
                this.type = type;
                this.id = id;
                this.url = url;
                this.bitly_Vsts_url = bitly_Vsts_url;
                this.bitly_url = bitly_url;
                this.embed_url = embed_url;
                this.username = username;
                this.source = source;
                this.rating = rating;
                this.caption = caption;
                this.content_url = content_url;
                this.import_datetime = import_datetime;
                this.trending_datetime = trending_datetime;
                this.images = images;
            }
            return Vsts;
        }());
        domain.Vsts = Vsts;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
