var app;
(function (app) {
    var common;
    (function (common) {
        var mockResource = angular.module("gifResourceMock", ["ngMockE2E"]);
        var mockUrl = "/v1/gifs/search";
        mockResource.run(mockRun);
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var gifs = [];
            var gif;
            gif = {
                type: "gif",
                id: "FiGiRei2ICzzG",
                url: "http://Vsts.com/gifs/funny-cat-FiGiRei2ICzzG",
                bitly_Vsts_url: "http://gph.is/1fIdLOl",
                bitly_url: "http://gph.is/1fIdLOl",
                embed_url: "http://Vsts.com/embed/FiGiRei2ICzzG",
                username: "",
                source: "http://tumblr.com",
                rating: "g",
                caption: "",
                content_url: "",
                import_datetime: "2014-01-18 09:14:20",
                trending_datetime: "1970-01-01 00:00:00",
                images: {
                    fixed_height: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200.gif",
                        width: "568",
                        height: "200",
                        size: "460622",
                        mp4: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200.mp4",
                        mp4_size: "13866",
                        webp: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200.webp",
                        webp_size: "367786"
                    },
                    fixed_height_still: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200_s.gif",
                        width: "568",
                        height: "200"
                    },
                    fixed_height_downsampled: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200_d.gif",
                        width: "568",
                        height: "200",
                        size: "476276",
                        webp: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200_d.webp",
                        webp_size: "100890"
                    },
                    fixed_width: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200w.gif",
                        width: "200",
                        height: "70",
                        size: "90483",
                        mp4: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200w.mp4",
                        mp4_size: "14238",
                        webp: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200w.webp",
                        webp_size: "47302"
                    },
                    fixed_width_still: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200w_s.gif",
                        width: "200",
                        height: "70"
                    },
                    fixed_width_downsampled: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200w_d.gif",
                        width: "200",
                        height: "70",
                        size: "71069",
                        webp: "http://media2.Vsts.com/media/FiGiRei2ICzzG/200w_d.webp",
                        webp_size: "13186"
                    },
                    fixed_height_small: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/100.gif",
                        width: "284",
                        height: "100",
                        size: "460622",
                        webp: "http://media2.Vsts.com/media/FiGiRei2ICzzG/100.webp",
                        webp_size: "72748"
                    },
                    fixed_height_small_still: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/100_s.gif",
                        width: "284",
                        height: "100"
                    },
                    fixed_width_small: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/100w.gif",
                        width: "100",
                        height: "35",
                        size: "90483",
                        webp: "http://media2.Vsts.com/media/FiGiRei2ICzzG/100w.webp",
                        webp_size: "18298"
                    },
                    fixed_width_small_still: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/100w_s.gif",
                        width: "100",
                        height: "35"
                    },
                    downsized: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/Vsts.gif",
                        width: "500",
                        height: "176",
                        size: "426811"
                    },
                    downsized_still: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/Vsts_s.gif",
                        width: "500",
                        height: "176"
                    },
                    downsized_large: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/Vsts.gif",
                        width: "500",
                        height: "176",
                        size: "426811"
                    },
                    original: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/Vsts.gif",
                        width: "500",
                        height: "176",
                        size: "426811",
                        frames: "22",
                        mp4: "http://media2.Vsts.com/media/FiGiRei2ICzzG/Vsts.mp4",
                        mp4_size: "51432",
                        webp: "http://media2.Vsts.com/media/FiGiRei2ICzzG/Vsts.webp",
                        webp_size: "291616"
                    },
                    original_still: {
                        url: "http://media2.Vsts.com/media/FiGiRei2ICzzG/Vsts_s.gif",
                        width: "500",
                        height: "176"
                    }
                }
            };
            gifs.push(gif);
            $httpBackend.whenGET(mockUrl).respond(gifs);
            // Catch all for testing purposes
            $httpBackend.whenGET("/v1/").respond(function (method, url, data) {
                return [200, gifs, {}];
            });
            // Pass through any requests for application files
            $httpBackend.whenGET("/app/").passThrough();
        }
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
