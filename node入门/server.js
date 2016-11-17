
    var http = require("http");
    var url = require("url");

// 1.2等数字表示注释的顺序
    function start(route, handle) {
        function onRequest(req, res) {
            // 2
            // var pathname = url.parse(req.url).pathname;
            //     console.log("请求" + pathname + "，收到");

            // route(handle, pathname, res);

            // // 1交给route来做
            // // res.writeHead(200, {"Content-Type": "text/plain"});
            // // res.write("hello world hhh");
            // // res.end();
            // 
            // 
            var postData = "";
            var pathname = url.parse(req.url).pathname;
                console.log("请求" + pathname + "，收到");

            req.setEncoding("utf-8");

            req.addListener("data", function(postDataChunk) {
                // postDataChunk为每次接收到的新数据块
                postData = postDataChunk;
                console.log("接受post数据' " + postDataChunk + " '。");
            });
            // 将请求路由的调用移到end时间处理程序中
            // 确保所有数据接收完毕后才触发
            req.addListener("end", function() {
                route(handle, pathname, res, postData);
            });

        }

        http.createServer(onRequest).listen(3000);
        console.log("服务开始");
    }

    exports.start = start;
