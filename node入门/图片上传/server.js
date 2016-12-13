
    var http = require("http");
    var url = require("url");

// 1.2等数字表示注释的顺序
    function start(route, handle) {
        function onRequest(req, res) {
            var pathname = url.parse(req.url).pathname;
                console.log("请求" + pathname + "已收到");

                route(handle, pathname, res , req);

        }

        http.createServer(onRequest).listen(3000);
        console.log("服务开始");
    }

    exports.start = start;
